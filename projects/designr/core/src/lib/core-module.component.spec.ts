import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModuleComponent } from './core-module.component';


describe('CoreModuleComponent', () => {
	let component: CoreModuleComponent;
	let fixture: ComponentFixture<CoreModuleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoreModuleComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoreModuleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
