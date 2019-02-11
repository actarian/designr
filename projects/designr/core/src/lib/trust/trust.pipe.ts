import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'safeHtml'
})
export class TrustPipe implements PipeTransform {

	constructor(
		private sanitizer: DomSanitizer
	) { }

	transform(text: string) {
		return this.sanitizer.bypassSecurityTrustHtml(text);
		// return this.sanitizer.bypassSecurityTrustStyle(text);
		// return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
	}
}
