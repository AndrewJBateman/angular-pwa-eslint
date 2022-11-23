import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StockListComponent } from "./stock-list/stock-list.component";
import { StockAddComponent } from "./stock-add/stock-add.component";

@NgModule({
	declarations: [StockListComponent, StockAddComponent],
	imports: [CommonModule],
	exports: [StockListComponent, StockAddComponent]
})
export class StocksModule {}
