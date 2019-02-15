import { Component, Input } from '@angular/core';
import { DisposableComponent, Image } from '@designr/core';

@Component({
	selector: 'picture-component',
	templateUrl: 'picture.component.html',
})
export class PictureComponent extends DisposableComponent {

	@Input() image: Image;

}
