import { Document } from './document';
import { Image } from './image';

export class MenuItem implements Document {
	id: number | string;
	name?: string;
	title?: string;
	abstract?: string;
	slug?: string;
	url?: string;
	type?: number | string;
	images?: Image[];
	items?: MenuItem[];

	constructor(options?: any) {
		if (options) {
			Object.assign(this, options);
			if (options.items) {
				this.items = options.items.map(item => new MenuItem(item));
			}
		}
	}
}
