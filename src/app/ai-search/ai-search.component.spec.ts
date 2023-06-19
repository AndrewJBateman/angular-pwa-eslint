import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AiSearchComponent } from "./ai-search.component";

describe("AiSearchComponent", () => {
	let component: AiSearchComponent;
	let fixture: ComponentFixture<AiSearchComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AiSearchComponent]
		});
		fixture = TestBed.createComponent(AiSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
