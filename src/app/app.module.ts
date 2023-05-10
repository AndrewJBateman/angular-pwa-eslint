import { APP_INITIALIZER, NgModule, inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";
import { NavModule } from "./modules/common/nav/nav.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SettingsService } from "./settings.service";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

@NgModule({
	declarations: [AppComponent],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: () => {
				const settingsService = inject(SettingsService);
				const http = inject(HttpClient);
				return () =>
					new Promise((resolve) => {
						// load settings for a deployed App
						if (environment.production) {
							http
								.get("./config.json")
								.pipe(
									tap((data: any) => {
										settingsService.baseUrl = data.baseUrl;
										resolve(true);
									}),
									catchError((error) => {
										settingsService.baseUrl = "http://default.api";
										resolve(true);
										return of(null);
									})
								)
								.subscribe();
						} else {
							// load settings for local App
							const settings = require("../../config.json");
							settingsService.baseUrl = settings.baseUrl;
              console.log('settings: ', settingsService.baseUrl);
							resolve(true);
						}
					});
			},
			multi: true
		}
	],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ServiceWorkerModule.register("ngsw-worker.js", {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the app is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: "registerWhenStable:30000"
		}),
		NavModule,
		BrowserAnimationsModule
	]
})
export class AppModule {}
