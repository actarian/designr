import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UIModuleComponent } from './ui-module.component';


describe('UIModuleComponent', () => {
	let component: UIModuleComponent;
	let fixture: ComponentFixture<UIModuleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UIModuleComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UIModuleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
