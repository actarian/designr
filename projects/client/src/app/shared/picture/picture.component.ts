import { Component, Input } from '@angular/core';
import { DisposableComponent, Image } from '@designr/core';
import { environment } from '../../../environments/environment';

// background: string = '083b6b', foreground: string = '053461'

@Component({
	selector: 'picture-component',
	templateUrl: 'picture.component.html',
})
export class PictureComponent extends DisposableComponent {

	@Input() image: Image;
	@Input() breakpoints?: string = `991x558, 1199x675, 1520x855, 1800x1012`;

	private getUrl(w: number, h: number): string {
		w = Math.round(w);
		h = Math.round(h);
		let url = this.image.url;
		if (!url || url === '' || url.indexOf('placeholder') === 0) {
			url = this.getPlaceholder(w, h);
		} else {
			url = `${this.image.url}?width=${w}&height=${h}&rmode=crop`;
		}
		return url;
	}

	get srcset(): string {
		const breakpoints = this.breakpoints.split(',').map(wh => wh.split('x').map(n => parseInt(n, 0)));
		return breakpoints.map(x => `${this.getUrl(x[0], x[1])} ${x[0]}w`).join(', ');
	}

	get sizes(): string {
		const breakpoints = this.breakpoints.split(',').map(wh => wh.split('x').map(n => parseInt(n, 0)));
		return breakpoints.map((x, i) => {
			if (i < breakpoints.length - 1) {
				return `(max-width: ${x[0]}px) ${x[0]}px`;
			} else {
				return `${x[0]}px`;
			}
		}).join(', ');
	}

	get src(): string {
		const breakpoints = this.breakpoints.split(',').map(wh => wh.split('x').map(n => parseInt(n, 0)));
		return this.getUrl(breakpoints[0][0], breakpoints[0][1]);
	}

	protected getPlaceholder(w: number = 1920, h: number = 1080) {
		return environment.picture.placeholder.replace('${w}', w.toFixed()).replace('${h}', h.toFixed());
	}

}
