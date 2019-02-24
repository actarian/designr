import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { Translate } from './translate';
import { TranslateService } from './translate.service';

@Directive({
	selector: '[translate]'
})
export class TranslateDirective extends DisposableComponent implements OnInit {

	key: string;
	innerHTML: string;

	/*
	@Input() set translate(key: string) {
		// console.log('TranslateDirective.translate', this.key, this.translateParams, this.template, this.view);
	}
	*/
	@Input() translate: string;
	@Input() translateParams: any;

	constructor(
		private element: ElementRef,
		private translateService: TranslateService<Translate>,
	) {
		super();
	}

	ngOnInit() {
		// console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
		this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(
			takeUntil(this.unsubscribe)
		).subscribe(translate => {
			this.element.nativeElement.innerHTML = translate;
			// console.log('TranslateDirective.ngOnInit', translate);
		});
		// console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
	}
}
