import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionModuleComponent } from './section-module.component';

describe('SectionModuleComponent', () => {
	let component: SectionModuleComponent;
	let fixture: ComponentFixture<SectionModuleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SectionModuleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SectionModuleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
