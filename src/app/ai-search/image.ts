export interface Image {
	created: number;
	data: Array<ImageURL>;
}

export interface ImageURL {
	url: string;
}

export interface Result {
	body: { created: number; data: Array<string> };
	headers: {
		normalizedNames: Array<string>;
		lazyUpdate: null;
		lazyInit: Array<string>;
	};
	ok: boolean;
	status: number;
	statusText: string;
	type: number;
	url: string;
}
