
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';

@Component({
	selector: 'outlet-content-component',
	template: `<div class="outlet">Outlet not found!</div>`,
})
export class OutletDefaultComponent extends DisposableComponent {
	@Input() outlet: Outlet;
}
