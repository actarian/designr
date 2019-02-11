import { ChangeDetectorRef, Injectable, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { RoutePipe } from '../routes/route.pipe';
import { SlugService } from './slug.service';

@Pipe({
	name: 'slugAsync',
	pure: false
})

@Injectable({
	providedIn: 'root'
})
export class SlugAsyncPipe implements OnDestroy, PipeTransform {

	private asyncPipe: CustomAsyncPipe;

	constructor(
		private changeDetector: ChangeDetectorRef,
		private slugService: SlugService,
		private routePipe: RoutePipe,
	) {
		this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
	}

	transform(key: string, segments?: string[]): string[] {
		let slugs = this.routePipe.transform(this.asyncPipe.transform(this.slugService.getKey(key)));
		// console.log('SlugAsyncPipe.transform', key, slugs);
		if (slugs && segments) {
			slugs = slugs.concat(segments);
		}
		return slugs;
	}

	ngOnDestroy(): void {
		this.asyncPipe.dispose();
	}

}
