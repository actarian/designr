import { ChangeDetectorRef, Injectable, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { Label } from './label';
import { LabelService } from './label.service';

@Pipe({
	name: 'labelAsync',
	pure: false
})

@Injectable({
	providedIn: 'root'
})
export class LabelAsyncPipe implements OnDestroy, PipeTransform {

	private asyncPipe: CustomAsyncPipe;

	constructor(
		private changeDetector: ChangeDetectorRef,
		private labelService: LabelService<Label>,
	) {
		this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
	}

	transform(key: string, text?: string, params?: any): string {
		return this.asyncPipe.transform(this.labelService.getKey(key, text, params));
	}

	ngOnDestroy(): void {
		this.asyncPipe.dispose();
	}

}
