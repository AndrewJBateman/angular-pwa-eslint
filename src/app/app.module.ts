import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";
import { DashboardModule } from "./modules/application/dashboard/dashboard.module";
import { StocksModule } from './modules/application/stocks/stocks.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: "serverApp" }),
		AppRoutingModule,
    HttpClientModule,
		ServiceWorkerModule.register("ngsw-worker.js", {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the app is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: "registerWhenStable:30000"
		}),
		DashboardModule,
  StocksModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
