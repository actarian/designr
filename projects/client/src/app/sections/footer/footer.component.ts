import { Component, ViewEncapsulation } from '@angular/core';
import { SectionComponent } from '@designr/section';

@Component({
	selector: 'footer-component',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class FooterComponent extends SectionComponent {

}
