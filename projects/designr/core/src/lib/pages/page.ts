import { Document } from '../models/document';
import { Feature } from '../models/feature';
import { Image } from '../models/image';
import { Taxonomy } from '../models/taxonomy';

export class PageMeta {
	appId?: string;
	author?: string;
	canonical?: string;
	description?: string;
	keywords?: string;
	locale?: string;
	robots?: string;
	title?: string;
	type?: string;
}

export class PageIndex implements Document {
	abstract?: string;
	id: number | string;
	images?: Image[];
	name?: string;
	relationType?: number | string;
	slug?: string;
	title?: string;
	type?: number | string;
	url?: string;

	constructor(options?: PageIndex) {
		if (options) {
			Object.assign(this, options);
		}
	}
}

export class PageRelation implements Document {
	id: number | string;
	page: Page;
	type?: number | string;
}

export class Page implements Document {
	abstract?: string;
	active?: boolean;
	component?: number | string;
	description?: string;
	features?: Feature[];
	id: number | string;
	images?: Image[];
	meta?: PageMeta = {};
	name?: string;
	related?: any[];
	slug?: string;
	taxonomies?: Taxonomy[];
	title?: string;
	type?: number | string;
	url?: string;

	constructor(options?: Page) {
		if (options) {
			Object.assign(this, options);
			if (options.related) {
				const related: PageIndex[] = options.related.map((x: PageRelation) => {
					const item = new PageIndex(x.page);
					item.relationType = x.type;
					return item;
				});
				this.related = related;
			}
		}
	}

	getFeature?(id: number): Feature {
		return this.features.find(x => x.id === id) || null;
	}

	getFeatures?(type: number, n: number[]): Feature[] {
		return this.features ? this.features.filter((x: Feature, i: number) => (
			n.indexOf(Number(x.id)) !== -1 && x.type === type
		)).sort((a: Feature, b: Feature) => a.type - b.type) : [];
	}

	getFeaturesByTypes?(type: number[]): Feature[] {
		return this.features ? this.features.filter((x: Feature) => (
			type.indexOf(Number(x.type)) !== -1
		)) : [];
	}

	getGroupedFeaturesByTypes?(type: number[]): any {
		const groups = {};
		type.forEach(type => {
			const group = groups[type] || { features: [] };
			if (this.features) {
				this.features.forEach((x: Feature) => {
					if (Number(x.type) === type) {
						group.features.push(x);
					}
				});
			}
			groups[type] = group;
		});
		/*
		if (this.features) {
			this.features.forEach((x: Feature) => {
				if (type.indexOf(Number(x.type)) !== -1) {
					const group = groups[x.type] || { features: [] };
					group.features.push(x);
					groups[x.type] = group;
				}
			});
		}
		*/
		return groups;
	}


}
