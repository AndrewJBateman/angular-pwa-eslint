import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

	{
		path: "about",
		loadChildren: () =>
			import("./modules/common/about/about.module").then(
				(mod) => mod.AboutModule
			)
	},
	{
		path: "contact",
		loadChildren: () =>
			import("./modules/common/contact/contact.module").then(
				(mod) => mod.ContactModule
			)
	},
	{
		path: "**",
		loadChildren: () =>
			import("./modules/common/not-found/not-found.module").then(
				(mod) => mod.NotFoundModule
			)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: "enabledBlocking"
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
