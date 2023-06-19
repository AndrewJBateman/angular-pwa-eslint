import { Component, OnInit } from "@angular/core";
import { map, filter, tap } from "rxjs";
import { ImageService } from "./ai-image.service";
import { ImageRequest } from "./image-request.model";

@Component({
	selector: "app-ai-search",
	templateUrl: "./ai-search.component.html",
	styleUrls: ["./ai-search.component.scss"]
})
export class AiSearchComponent implements OnInit {
	public generatedImage = "";

	constructor(private imageService: ImageService) {}

	ngOnInit(): void {
		const requestImage: ImageRequest = {
			prompt: "A live salmon",
			n: 1,
			size: "256x256"
		};

		this.imageService
			.fetchImageFromPrompt(requestImage)
			.pipe(
				tap((res) => console.log("res: ", res, typeof res)),
				map((res: any) => res.body),
				map((image) => image!.data),
				filter((images) => images.length != 0)
			)
			.subscribe((images) => {
				this.generatedImage = images[0].url;
			});
	}
}
