import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlModuleComponent } from './control-module.component';

describe('ControlModuleComponent', () => {
	let component: ControlModuleComponent;
	let fixture: ComponentFixture<ControlModuleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({ declarations: [ControlModuleComponent] }).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ControlModuleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
