import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'highlight',
	// pure: false
})

@Injectable({
	providedIn: 'root'
})
export class HighlightPipe implements PipeTransform {

	transform(text: string, query: string): string {
		if (!query) {
			return text;
		}
		text = this.encodeHTML(text);
		query = this.encodeHTML(query);
		const regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
		return text.replace(regExp, function (match) {
			return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
		});
	}

	escapeRegexChars(text: string) {
		return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	}

	safeToString(text: string) {
		return text === undefined || text === null ? '' : text.toString().trim();
	}

	encodeHTML(text: string) {
		return this.safeToString(text)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

}
