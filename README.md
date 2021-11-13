# :zap: Angular PWA ESLint

* Progressive Web App that will use ESLint instead of TSLint that is deprecated
* **Code by 'Roman Just Codes'** from [Roman Just Codes](https://www.youtube.com/channel/UCKsp3r1ERjCpKJtD2n5WtPg) - see [:clap: Inspiration](#clap-inspiration) below.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-pwa-eslint?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-pwa-eslint?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-pwa-eslint?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-pwa-eslint?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular PWA ESLint](#zap-angular-pwa-eslint)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* [Progressive Web App](https://web.dev/progressive-web-apps/) to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device with a single codebase.

## :camera: Screenshots

![Example screenshot](./img/pwa.jpg)

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [Angular PWA](https://angular.io/guide/service-worker-getting-started) to add Angular service worked to app
* [Iconfinder](https://www.iconfinder.com/) for free svg ivons
* [Free Vector Graphics Software](https://vectr.com/)
* [cthedot.de](https://cthedot.de/icongen/) icon generation - Web and App icons and PNG favicons
* [Custom Splash Screen on iOS](https://appsco.pe/developer/splash-screens)
* [http-server](https://www.npmjs.com/package/http-server) command-line http server

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng update` to update Angular
* Run `npm run lint` to lint app - produces no output at the moment

## :computer: Code Examples

* `manifest.webmanifest` PWA config.file caches resources/assets using a set caching strategy

```typescript
{
  "name": "News App",
  "short_name": "News App",
  "theme_color": "#0D47A1",
  "background_color": "#0D47A1",
  "display": "standalone",
  "scope": "./",
  "start_url": "./",
  "icons": [
    {
      "src": "assets/icons/apple-touch-icon-180x180.png",
      "sizes": "180x180",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "assets/icons/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ]
}
```

## :cool: Features

* tba

## :clipboard: Status & To-Do List

* Status: App compiles with zero errors. Basic tutorial completed
* To-Do: Add Eslint then add news API

## :clap: Inspiration

* [PWAs (Progressive Web Apps) in Angular - Make them look like Native Mobile Apps! - Roman Just Codes]](https://www.youtube.com/watch?v=WgdUGwTE1XU&t=127s)
* [A Guide to Building a PWA in Angular 8](https://levelup.gitconnected.com/a-guide-to-building-a-pwa-in-angular-acea27ae708d)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com