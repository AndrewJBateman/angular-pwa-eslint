import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import * as LightweightCharts from "lightweight-charts";
import { CryptoDataService } from "../services/crypto-data.service";

@Component({
	selector: "app-chart2",
	templateUrl: "./chart2.component.html",
	styleUrls: ["./chart2.component.scss"]
})
export class Chart2Component implements AfterViewInit, OnInit {
	@ViewChild("chart2") chartRef: any;

	private areaSeries: any;
	private lineSeries: any;
	private price: any;

	constructor(private dataService: CryptoDataService) {
    console.log('not useless2')
  }

	ngAfterViewInit(): void {
		const chart = LightweightCharts.createChart(this.chartRef.nativeElement, {
			width: 600,
			height: 300,
			rightPriceScale: {
				scaleMargins: {
					top: 0.2,
					bottom: 0.1
				}
			},
			leftPriceScale: {
				visible: true,
				borderColor: "#CBCEC5"
			},
			crosshair: {
				mode: LightweightCharts.CrosshairMode.Normal
			},
			timeScale: {
				borderColor: "#C5CBCE"
			},
			handleScroll: {
				vertTouchDrag: false
			}
		});
		chart.timeScale().fitContent();

		this.areaSeries = chart.addAreaSeries({
			topColor: "#E8FAB6",
			bottomColor: "#ECFAC3",
			lineColor: "#8BBEB2",
			lineWidth: 2,
			priceScaleId: "left"
		});

		this.areaSeries.setData([]);
		this.lineSeries = chart.addLineSeries({
			color: "#0D0630",
			lineWidth: 2
		});
		this.lineSeries.setData([]);
	}

	ngOnInit(): void {
		this.dataService.cryptoWsMessage.subscribe((data: any) => {
			console.log("cryptoWsMessage data: ", data);
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
	}
}
