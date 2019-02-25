import { Component, Input } from '@angular/core';

@Component({
	selector: '[sprite]',
	template: `<ng-container *ngIf="sprite">
	<svg class="sprite">
		<use attr.xlink:href="#{{sprite}}"></use>
	</svg>
</ng-container>`,
})
export class SpriteComponent {

	@Input() sprite: string;

}
