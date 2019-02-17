import { Component, Input } from '@angular/core';
import { DisposableComponent, Image } from '@designr/core';

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
		if (this.image.url.indexOf('https://dummyimage.com/') === 0) {
			const segments = this.image.url.split('/');
			segments[3] = `${w}x${h}`;
			return segments.join('/');
		} else {
			return `${this.image.url}?width=${w}&height=${h}&rmode=crop`;
		}
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

}
