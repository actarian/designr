import { Injectable, Injector } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { EntityService, HttpStatusCodeService, Image, ImageType } from '@designr/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LinkDefinition, LinkService } from './link.service';
import { Page } from './page';

@Injectable({
	providedIn: 'root'
})
export class PageService extends EntityService<Page> {

	public page: Page;

	get collection(): string {
		return '/api/page';
	}

	constructor(
		protected injector: Injector,
		private titleService: Title,
		private metaService: Meta,
		private linkService: LinkService,
		private statusCodeService: HttpStatusCodeService,
	) {
		super(injector);
		// console.log('PageService', options);
	}

	getStatePageBySlug(slug: string): Observable<Page> {
		slug = slug.split('?')[0];
		if (slug.indexOf('/') === 0) {
			slug = slug.substr(1);
		}
		return this.stateGet(`?slug=/${slug}`).pipe(
			map(x => {
				x = new Page(Array.isArray(x) ? x.find(x => x.slug === `/${slug}`) : x);
				// console.log('PageService.getStatePageBySlug', x);
				return x;
			}),
			catchError(error => {
				// console.log('getStatePageBySlug.error', error);
				this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
				return of(null);
			}),
		);
	}

	getStatePageById(id: number | string): Observable<Page> {
		return this.stateGet(`/${id}`).pipe(
			// tap(x => console.log('PageService.getPageById', id, x)),
			map(x => new Page(x)),
			catchError(error => {
				this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
				return of(null);
			})
		);
	}

	getPageById(id: number | string): Observable<Page> {
		return this.get(`/${id}`).pipe(
			// tap(x => console.log('PageService.getPageById', id, x)),
			map(x => new Page(x)),
			catchError(error => {
				this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
				return of(null);
			})
		);
	}

	getPageBySlug(slug: string): Observable<Page> {
		slug = slug.split(';')[0];
		// console.log('PageService.getPageBySlug', slug);
		return this.get(`?slug=/${slug}`).pipe(
			map(x => new Page(x)),
			// tap(x => this.logger.log(`found pages matching "${slug}"`))
			// tap(x => console.log('PageService.getPageBySlug', x, slug))
			catchError(error => {
				// console.log('PageService.getPageBySlug.error', error);
				this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
				return of(null);
			})
		);
	}

	addOrUpdateMetaData(page: Page) {
		// console.log('PageService.addOrUpdateMetaData', page);
		if (!page) {
			return;
		}
		this.titleService.setTitle(page.title);
		this.addOrUpdateMeta({ property: 'og:title', content: page.title });
		this.addOrUpdateMeta({ property: 'og:image', content: this.getSocialImage(page).url });
		this.addOrUpdateMeta({ property: 'og:image:width', content: '1200' });
		this.addOrUpdateMeta({ property: 'og:image:height', content: '630' });
		this.addOrUpdateMeta({ property: 'og:url', content: page.url || this.origin });
		const meta = page.meta;
		if (meta) {
			this.addOrUpdateMeta({ name: 'description', content: meta.description || 'Servizio di qualità senza costi aggiuntivi con i convenienti pacchetti viaggio Eurospin. Prenota comodamente online!' });
			this.addOrUpdateMeta({ name: 'keywords', content: meta.keywords || 'viaggi,viaggi eurospin' });
			this.addOrUpdateMeta({ name: 'robots', content: meta.robots || 'index,follow' });
			this.addOrUpdateMeta({ property: 'og:locale', content: meta.locale || 'it_IT' });
			this.addOrUpdateMeta({ property: 'og:type', content: meta.type || 'article' });
			this.addOrUpdateMeta({ property: 'og:author', content: meta.author || 'Eurospin Viaggi' });
			this.addOrUpdateLink({ rel: 'canonical', href: meta.canonical || (this.origin.indexOf(page.url) === 0 ? null : page.url) });
		}
		// console.log('PageOutletComponent.addOrUpdateMetaData', page.id, page.title, page.url);
	}

	getSocialImage(page: Page): Image {
		const image = page.images ? (
			page.images.find(i => i.type === ImageType.Share) ||
			page.images.find(i => i.type === ImageType.Default) ||
			page.images.find(i => i.type === ImageType.Gallery)
		) : null;
		return image || {
			url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
		} as Image;
	}

	addOrUpdateMeta(definition: MetaDefinition) {
		const selector = definition.name ? `name="${definition.name}"` : `property="${definition.property}"`;
		if (this.metaService.getTag(selector)) {
			if (definition.content) {
				this.metaService.updateTag(definition, selector);
			} else {
				this.metaService.removeTag(selector);
			}
		} else if (definition.content) {
			this.metaService.addTag(definition);
		}
	}

	addOrUpdateLink(definition: LinkDefinition) {
		const selector = definition.id ? `#${definition.id}` : `[rel="${definition.rel}"]`;
		if (this.linkService.getTag(selector)) {
			if (definition.href) {
				this.linkService.updateTag(selector, definition);
			} else {
				this.linkService.removeTag(selector);
			}
		} else if (definition.href) {
			this.linkService.addTag(definition);
		}
	}

}
