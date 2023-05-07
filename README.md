# :zap: Angular PWA ESLint

* Progressive Web App to show crypto stock prices using the [polygon.io](https://polygon.io/) financial market data API and ng chart modules

* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-pwa-eslint?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-pwa-eslint?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-pwa-eslint?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-pwa-eslint?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular PWA ESLint](#zap-angular-pwa-eslint)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* [Progressive Web App](https://web.dev/progressive-web-apps/) to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device with a single codebase.

* **Application Modules**
* **Dashboard: Chart1** uses [lightweightcharts](https://www.npmjs.com/package/lightweight-charts) to display crypto messages received from [Coincap websocket stream](https://docs.coincap.io/#9d1f0874-aa46-420c-9091-8bf9859c0743) using [RxJS webSocket](https://rxjs.dev/api/webSocket/webSocket)
* **Dashboard: Chart2** in dev.

* **Stocks: Ticker** in dev. Uses the [polygon.io](https://polygon.io/) financial market data API

* **Common Modules**
* About
* Contact
* Not-Found

## :camera: Screenshots

![Example screenshot](./img/pwa.jpg)

## :signal_strength: Technologies

* [Angular v16](https://angular.io/)
* [Angular PWA v16](https://angular.io/guide/service-worker-getting-started) to add Angular service worked to app
* [Server-side rendering](https://angular.io/guide/universal) with Angular Universal
* [npm lightweightcharts v3](https://www.npmjs.com/package/lightweight-charts) small fast financial HTML5 charts
* [Iconfinder](https://www.iconfinder.com/) for free svg ivons
* [Free Vector Graphics Software](https://vectr.com/)
* [cthedot.de](https://cthedot.de/icongen/) icon generation - Web and App icons and PNG favicons
* [Custom Splash Screen on iOS](https://appsco.pe/developer/splash-screens)
* [http-server](https://www.npmjs.com/package/http-server) command-line http server

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `npm run lint` to lint app - produces no output at the moment
* Run `npx prettier --write .` to apply prettier rules to ALL files, except those listed in `.prettierignore`
* Run `npx prettier --check .` to check all files using prettier rules
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run build` to build the project. The build artifacts will be stored in the `docs/` directory.
* `npm run build:ssr` to create SSR build folder
* `npm serve:ssr` to run SSR build
* `npm run prerender` to create SSR prerender files
* Add defer to dist/angular-material-api/index.html to make loading of styles asynchronous
* `node docs/angular-pwa-eslint/server/main.js` to view on a dev server

## :computer: Code Examples

* `manifest.webmanifest` PWA config.file caches resources/assets using a set caching strategy

```typescript
this.dataService.cryptoWsMessage.subscribe((data: any) => {
			console.log('cryptoWsMessage data: ', data);
			const now = new Date();
			this.price = data;
			if (this.price.bitcoin) {
				this.areaSeries.update({
					time: now.getTime(),
					value: Number(this.price.bitcoin)
				});
			}
			if (this.price.ethereum) {
				this.lineSeries.update({
					time: now.getTime(),
					value: Number(this.price.ethereum)
				});
			}
		});
```

## :cool: Features

* Websockets

## :clipboard: Status & To-Do List

* Status: App compiles & builds. Very slow to show crypto prices on the chart
* To-Do: update to chart v4? - has breaking changes
* To-Do: replace "any" return types
* To-Do: stocks: add ticker card, portfolio table
* To-Do: crypto: fix chart2

## :clap: Inspiration

* [PWAs (Progressive Web Apps) in Angular - Make them look like Native Mobile Apps! - Roman Just Codes](https://www.youtube.com/watch?v=WgdUGwTE1XU&t=127s)
* [A Guide to Building a PWA in Angular 8](https://levelup.gitconnected.com/a-guide-to-building-a-pwa-in-angular-acea27ae708d)
* [issueexplorer: Angular 13 Build crashes with Cannot find module 'webpack-sources'](https://issueexplorer.com/issue/angular/angular-cli/22082)
* [Angular project structure best practice](https://stackoverflow.com/questions/52933476/angular-project-structure-best-practice#:~:text=Do%20be%20descriptive%20with%20file,multiple%20services%2C%20or%20a%20mixture.&text=Do%20keep%20a%20flat%20folder,reaches%20seven%20or%20more%20files.)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
