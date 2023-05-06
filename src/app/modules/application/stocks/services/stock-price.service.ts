import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class StockPriceService {
	readonly apiBaseUrl = "https://api.polygon.io/v3";
	readonly apiKey = "ERorLWWuGPln5HY5TBtTnr6_PCE5pkT5";

	constructor(public http: HttpClient) {}

	getStockTicker = (symbol: string): any => {
		return this.http.get(
			`${this.apiBaseUrl}/reference/tickers/${symbol}?apiKey=${this.apiKey}`
		);
	};
}
