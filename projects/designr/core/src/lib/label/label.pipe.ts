import { ChangeDetectorRef, Injectable, NgZone, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { Label } from './label';
import { LabelService } from './label.service';

@Pipe({
	name: 'label',
	pure: false
})

@Injectable({
	providedIn: 'root'
})
export class LabelPipe implements OnDestroy, PipeTransform {

	private asyncPipe: CustomAsyncPipe;
	private value: string;

	constructor(
		private zone: NgZone,
		private changeDetector: ChangeDetectorRef,
		private labelService: LabelService<Label>,
	) {
		// this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
	}

	private key$: Observable<string>;

	getKey(key: string, text: string, params: any) {
		if (this.key$) {
			return;
		}
		this.key$ = this.labelService.getKey(key, text, params);
		this.key$.pipe(
			first(),
		).subscribe(value => {
			this.value = value;
			// this.changeDetector.markForCheck();
		});
	}

	transform(key: string, text?: string, params?: any): string | undefined {
		if (this.value) {
			return this.value;
		}
		this.getKey(key, text, params); // this.asyncPipe.transform(this.labelService.getKey(key, text, params));
	}

	ngOnDestroy(): void {
		// this.asyncPipe.dispose();
	}

}
