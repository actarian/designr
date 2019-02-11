import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { Label } from './label';
import { LabelService } from './label.service';

@Directive({
	selector: '[label]'
})
export class LabelDirective extends DisposableComponent implements OnInit {

	key: string;
	innerHTML: string;

	/*
	@Input() set label(key: string) {
		// console.log('LabelDirective.label', this.key, this.labelParams, this.template, this.view);
	}
	*/
	@Input() label: string;
	@Input() labelParams: any;

	constructor(
		private element: ElementRef,
		private labelService: LabelService<Label>,
	) {
		super();
	}

	ngOnInit() {
		// console.log('LabelDirective.ngOnInit', this.element.nativeElement.innerHTML);
		this.labelService.getKey(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(
			takeUntil(this.unsubscribe)
		).subscribe(label => {
			this.element.nativeElement.innerHTML = label;
			// console.log('LabelDirective.ngOnInit', label);
		});
		// console.log('LabelDirective.ngOnInit', this.label, this.labelParams, this.template, this.view);
	}
}
