import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { StockPriceService } from "../services/stock-price.service";

@Component({
	selector: "app-stock-list",
	templateUrl: "./stock-list.component.html",
	styleUrls: ["./stock-list.component.scss"]
})
export class StockListComponent implements OnInit {
	stockPriceList: Observable<any> = new Observable<any>();

	constructor(private stockPriceService: StockPriceService) {}

	ngOnInit(): any {
		this.stockPriceService
			.getStockTicker("MSFT")
			.subscribe((response: any) => {
				this.stockPriceList = response;
        console.log('response: ', this.stockPriceList)
			});
	}
}
