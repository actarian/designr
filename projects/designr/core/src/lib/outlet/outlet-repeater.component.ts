
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Outlet } from './outlet';

@Component({
	selector: 'outlet-repeater-component',
	template: `<ng-container *ngFor="let outlet of outlets"><outlet-component [outlet]="outlet"></outlet-component></ng-container>`,
})
export class OutletRepeaterComponent extends DisposableComponent {
	@Input() outlets: Outlet[];
}
