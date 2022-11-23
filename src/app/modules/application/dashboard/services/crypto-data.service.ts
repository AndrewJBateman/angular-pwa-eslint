import { Injectable } from "@angular/core";
import { webSocket } from "rxjs/webSocket";
import { concatMap, delay, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class CryptoDataService {
	private cryptoPrices = webSocket(
		"wss://ws.coincap.io/prices?assets=bitcoin,ethereum"
	);

	public cryptoWsMessage = this.cryptoPrices.pipe(
		concatMap((item) =>
			of(item).pipe(
				tap((item) => console.log('item: ', item)),
				delay(20000)
			)
		)
	);
}
