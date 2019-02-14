import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageModuleComponent } from './page-module.component';

describe('PageModuleComponent', () => {
	let component: PageModuleComponent;
	let fixture: ComponentFixture<PageModuleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PageModuleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PageModuleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
