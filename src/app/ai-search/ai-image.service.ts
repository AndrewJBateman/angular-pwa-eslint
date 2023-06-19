import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Image } from "./image";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ImageRequest } from "./image-request.model";

@Injectable({
	providedIn: "root"
})
export class ImageService {
	private openaiApiURL = "https://api.openai.com/v1";

	private bearerToken = "YOUR TOKEN HERE";
	private organisation = "YOUR ORG HERE";

	constructor(private http: HttpClient) {}

	fetchImageFromPrompt(
		requestImage: ImageRequest
	): Observable<HttpResponse<Image>> {
		const headers = new HttpHeaders()
			.set("Authorization", `Bearer ${this.bearerToken}`)
			.set("OpenAI-Organization", this.organisation);
		return this.http.post<Image>(
			`${this.openaiApiURL}/images/generations`,
			requestImage,
			{ headers, observe: "response" }
		);
	}
}
