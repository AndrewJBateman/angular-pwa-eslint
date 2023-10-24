# :zap: Angular PWA ESLint

* Progressive Web App using ChatGPT to generate images

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

## :camera: Screenshots

![Example screenshot](./img/ai-image.jpg)

## :signal_strength: Technologies

* [Angular v16](https://angular.io/)
* [Angular PWA v16](https://angular.io/guide/service-worker-getting-started) to add Angular service worked to app
* [Open AI API](https://platform.openai.com/docs/api-reference/introduction)

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Get yourself a ChatGPT API key and Organisation ID from [openai.com](https://platform.openai.com/docs/api-reference)
* Run `npm run lint:fix` to lint app & fix errors
* Run `npx prettier --write .` to apply prettier rules to ALL files, except those listed in `.prettierignore`
* Run `npx prettier --check .` to check all files using prettier rules
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :computer: Code Examples

* 'ai-search.component.ts' method to search for AI image

```typescript
ngOnInit(): void {
		const requestImage: ImageRequest = {
			prompt: "A live salmon with a funny face",
			n: 1,
			size: "256x256"
		};

		this.imageService
			.fetchImageFromPrompt(requestImage)
			.pipe(
				tap((res) => console.log("res: ", res, typeof res)),
				map((res: any) => res.body),
				map((image) => image.data),
				filter((images) => images.length != 0)
			)
			.subscribe((images) => {
				this.generatedImage = images[0].url;
			});
	}
```

## :cool: Features

* Uses ChatGPT to search for images

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Add more ChatGPT search types, correct AI search result model 'Result' in 'image.ts' file

## :clap: Inspiration

* [PWAs (Progressive Web Apps) in Angular - Make them look like Native Mobile Apps! - Roman Just Codes](https://www.youtube.com/watch?v=WgdUGwTE1XU&t=127s)
* [A Guide to Building a PWA in Angular 8](https://levelup.gitconnected.com/a-guide-to-building-a-pwa-in-angular-acea27ae708d)
* [Enea Jahollari: Configure Prettier and ESLint with Angular](https://itnext.io/configure-prettier-and-eslint-with-angular-e7b4ce979cd8)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@yahoo.com`
