import { Component } from "@angular/core";
import { SettingsService } from "./settings.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	title = "angular-pwa-eslint";

  constructor(private settingsService: SettingsService) {

  }
}
