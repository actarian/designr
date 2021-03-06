import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { Label } from './label';
import { LabelService } from './label.service';

@Directive({
	selector: '[label]'
})
export class LabelDirective extends DisposableComponent implements OnInit {

	// key: string;
	// innerHTML: string;
	@Input() label: string;
	@Input() labelParams: any;

	constructor(
		private element: ElementRef,
		private labelService: LabelService<Label>,
	) {
		super();
	}

	ngOnInit() {
		this.labelService.transform$(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(
			takeUntil(this.unsubscribe)
		).subscribe(label => {
			this.element.nativeElement.innerHTML = label;
		});
	}

}
