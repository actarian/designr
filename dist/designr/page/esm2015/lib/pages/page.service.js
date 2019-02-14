/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { EntityService, HttpStatusCodeService, ImageType } from '@designr/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PageConfig, PAGE_CONFIG } from '../config/page.config';
import { LinkService } from './link.service';
import { Page } from './page';
import * as i0 from "@angular/core";
import * as i1 from "../config/page.config";
import * as i2 from "@angular/platform-browser";
import * as i3 from "./link.service";
import * as i4 from "@designr/core";
export class PageService extends EntityService {
    /**
     * @param {?} options
     * @param {?} injector
     * @param {?} titleService
     * @param {?} metaService
     * @param {?} linkService
     * @param {?} statusCodeService
     */
    constructor(options, injector, titleService, metaService, linkService, statusCodeService) {
        super(injector);
        this.injector = injector;
        this.titleService = titleService;
        this.metaService = metaService;
        this.linkService = linkService;
        this.statusCodeService = statusCodeService;
        console.log('PageService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PageConfig(options);
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/page';
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getStatePageBySlug(slug) {
        slug = slug.split('?')[0];
        if (slug.indexOf('/') === 0) {
            slug = slug.substr(1);
        }
        return this.stateGet(`?slug=/${slug}`).pipe(map(x => {
            x = new Page(Array.isArray(x) ? x.find(x => x.slug === `/${slug}`) : x);
            // console.log('PageService.getStatePageBySlug', x);
            return x;
        }), catchError(error => {
            // console.log('getStatePageBySlug.error', error);
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getStatePageById(id) {
        return this.stateGet(`/${id}`).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(x => new Page(x)), catchError(error => {
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getPageById(id) {
        return this.get(`/${id}`).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(x => new Page(x)), catchError(error => {
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getPageBySlug(slug) {
        slug = slug.split(';')[0];
        // console.log('PageService.getPageBySlug', slug);
        return this.get(`?slug=/${slug}`).pipe(map(x => new Page(x)), 
        // tap(x => this.logger.log(`found pages matching "${slug}"`))
        // tap(x => console.log('PageService.getPageBySlug', x, slug))
        catchError(error => {
            // console.log('PageService.getPageBySlug.error', error);
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    addOrUpdateMetaData(page) {
        // console.log('PageService.addOrUpdateMetaData', page);
        if (!page) {
            return;
        }
        // !!!
        // const fbAppId: string = this.config.plugins && this.config.plugins.facebook ? this.config.plugins.facebook.appId.toString() : '';
        this.titleService.setTitle(page.title);
        this.addOrUpdateMeta({ property: 'og:title', content: page.title });
        this.addOrUpdateMeta({ property: 'og:image', content: this.getSocialImage(page).url });
        this.addOrUpdateMeta({ property: 'og:image:width', content: '1200' });
        this.addOrUpdateMeta({ property: 'og:image:height', content: '630' });
        // this.addOrUpdateMeta({ property: 'fb:app_id', content: fbAppId });
        this.addOrUpdateMeta({ property: 'og:url', content: page.url || this.origin });
        /** @type {?} */
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
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    getSocialImage(page) {
        /** @type {?} */
        const image = page.images ? (page.images.find(i => i.type === ImageType.Share) ||
            page.images.find(i => i.type === ImageType.Default) ||
            page.images.find(i => i.type === ImageType.Gallery)) : null;
        return image || (/** @type {?} */ ({
            url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
        }));
    }
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    addOrUpdateMeta(definition) {
        /** @type {?} */
        const selector = definition.name ? `name="${definition.name}"` : `property="${definition.property}"`;
        if (this.metaService.getTag(selector)) {
            if (definition.content) {
                this.metaService.updateTag(definition, selector);
            }
            else {
                this.metaService.removeTag(selector);
            }
        }
        else if (definition.content) {
            this.metaService.addTag(definition);
        }
    }
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    addOrUpdateLink(definition) {
        /** @type {?} */
        const selector = definition.id ? `#${definition.id}` : `[rel="${definition.rel}"]`;
        if (this.linkService.getTag(selector)) {
            if (definition.href) {
                this.linkService.updateTag(selector, definition);
            }
            else {
                this.linkService.removeTag(selector);
            }
        }
        else if (definition.href) {
            this.linkService.addTag(definition);
        }
    }
}
PageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PageService.ctorParameters = () => [
    { type: PageConfig, decorators: [{ type: Inject, args: [PAGE_CONFIG,] }] },
    { type: Injector },
    { type: Title },
    { type: Meta },
    { type: LinkService },
    { type: HttpStatusCodeService }
];
/** @nocollapse */ PageService.ngInjectableDef = i0.defineInjectable({ factory: function PageService_Factory() { return new PageService(i0.inject(i1.PAGE_CONFIG), i0.inject(i0.INJECTOR), i0.inject(i2.Title), i0.inject(i2.Meta), i0.inject(i3.LinkService), i0.inject(i4.HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PageService.prototype.options;
    /**
     * @type {?}
     * @protected
     */
    PageService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.linkService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.statusCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsSUFBSSxFQUFrQixLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixFQUFTLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7OztBQUs5QixNQUFNLE9BQU8sV0FBWSxTQUFRLGFBQW1COzs7Ozs7Ozs7SUFRbkQsWUFDc0IsT0FBbUIsRUFDOUIsUUFBa0IsRUFDcEIsWUFBbUIsRUFDbkIsV0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsaUJBQXdDO1FBRWhELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQU5OLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQU87UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtRQUdoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxP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O0lBUTFCLCtCQUE0Qjs7Ozs7SUFDNUIsbUNBQTJCOzs7OztJQUMzQixrQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFnQzs7Ozs7SUFDaEMsd0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YSwgTWV0YURlZmluaXRpb24sIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlLCBIdHRwU3RhdHVzQ29kZVNlcnZpY2UsIEltYWdlLCBJbWFnZVR5cGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlQ29uZmlnLCBQQUdFX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9wYWdlLmNvbmZpZyc7XG5pbXBvcnQgeyBMaW5rRGVmaW5pdGlvbiwgTGlua1NlcnZpY2UgfSBmcm9tICcuL2xpbmsuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNlcnZpY2UgZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPFBhZ2U+IHtcblxuXHRwdWJsaWMgb3B0aW9uczogUGFnZUNvbmZpZztcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9wYWdlJztcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUEFHRV9DT05GSUcpIG9wdGlvbnM6IFBhZ2VDb25maWcsXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG5cdFx0cHJpdmF0ZSBtZXRhU2VydmljZTogTWV0YSxcblx0XHRwcml2YXRlIGxpbmtTZXJ2aWNlOiBMaW5rU2VydmljZSxcblx0XHRwcml2YXRlIHN0YXR1c0NvZGVTZXJ2aWNlOiBIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0XHRjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHQvLyBvcHRpb25zLmRlZmF1bHRQYWdlID0gKG9wdGlvbnMuZGVmYXVsdFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50KSBhcyBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRcdC8vIG9wdGlvbnMubm90Rm91bmRQYWdlID0gKG9wdGlvbnMubm90Rm91bmRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgUGFnZUNvbmZpZyhvcHRpb25zKTtcblx0fVxuXG5cdGdldFN0YXRlUGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRzbHVnID0gc2x1Zy5zcGxpdCgnPycpWzBdO1xuXHRcdGlmIChzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuXHRcdFx0c2x1ZyA9IHNsdWcuc3Vic3RyKDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdGF0ZUdldChgP3NsdWc9LyR7c2x1Z31gKS5waXBlKFxuXHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHR4ID0gbmV3IFBhZ2UoQXJyYXkuaXNBcnJheSh4KSA/IHguZmluZCh4ID0+IHguc2x1ZyA9PT0gYC8ke3NsdWd9YCkgOiB4KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFN0YXRlUGFnZUJ5U2x1ZycsIHgpO1xuXHRcdFx0XHRyZXR1cm4geDtcblx0XHRcdH0pLFxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdnZXRTdGF0ZVBhZ2VCeVNsdWcuZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMsIGVycm9yLmVycm9yID8gZXJyb3IuZXJyb3IucmVkaXJlY3RVcmwgOiBudWxsKTtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxuXG5cdGdldFN0YXRlUGFnZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZT4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlR2V0KGAvJHtpZH1gKS5waXBlKFxuXHRcdFx0Ly8gdGFwKHggPT4gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkJywgaWQsIHgpKSxcblx0XHRcdG1hcCh4ID0+IG5ldyBQYWdlKHgpKSxcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGdldFBhZ2VCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoYC8ke2lkfWApLnBpcGUoXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCwgeCkpLFxuXHRcdFx0bWFwKHggPT4gbmV3IFBhZ2UoeCkpLFxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMsIGVycm9yLmVycm9yID8gZXJyb3IuZXJyb3IucmVkaXJlY3RVcmwgOiBudWxsKTtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRzbHVnID0gc2x1Zy5zcGxpdCgnOycpWzBdO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRQYWdlQnlTbHVnJywgc2x1Zyk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGA/c2x1Zz0vJHtzbHVnfWApLnBpcGUoXG5cdFx0XHRtYXAoeCA9PiBuZXcgUGFnZSh4KSksXG5cdFx0XHQvLyB0YXAoeCA9PiB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIHBhZ2VzIG1hdGNoaW5nIFwiJHtzbHVnfVwiYCkpXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHgsIHNsdWcpKVxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRQYWdlQnlTbHVnLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGFkZE9yVXBkYXRlTWV0YURhdGEocGFnZTogUGFnZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5hZGRPclVwZGF0ZU1ldGFEYXRhJywgcGFnZSk7XG5cdFx0aWYgKCFwYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vICEhIVxuXHRcdC8vIGNvbnN0IGZiQXBwSWQ6IHN0cmluZyA9IHRoaXMuY29uZmlnLnBsdWdpbnMgJiYgdGhpcy5jb25maWcucGx1Z2lucy5mYWNlYm9vayA/IHRoaXMuY29uZmlnLnBsdWdpbnMuZmFjZWJvb2suYXBwSWQudG9TdHJpbmcoKSA6ICcnO1xuXHRcdHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHBhZ2UudGl0bGUpO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHBhZ2UudGl0bGUgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogdGhpcy5nZXRTb2NpYWxJbWFnZShwYWdlKS51cmwgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmltYWdlOndpZHRoJywgY29udGVudDogJzEyMDAnIH0pO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZTpoZWlnaHQnLCBjb250ZW50OiAnNjMwJyB9KTtcblx0XHQvLyB0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnZmI6YXBwX2lkJywgY29udGVudDogZmJBcHBJZCB9KTtcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogcGFnZS51cmwgfHwgdGhpcy5vcmlnaW4gfSk7XG5cdFx0Y29uc3QgbWV0YSA9IHBhZ2UubWV0YTtcblx0XHRpZiAobWV0YSkge1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiBtZXRhLmRlc2NyaXB0aW9uIHx8ICdTZXJ2aXppbyBkaSBxdWFsaXTDoCBzZW56YSBjb3N0aSBhZ2dpdW50aXZpIGNvbiBpIGNvbnZlbmllbnRpIHBhY2NoZXR0aSB2aWFnZ2lvIEV1cm9zcGluLiBQcmVub3RhIGNvbW9kYW1lbnRlIG9ubGluZSEnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiBtZXRhLmtleXdvcmRzIHx8ICd2aWFnZ2ksdmlhZ2dpIGV1cm9zcGluJyB9KTtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6IG1ldGEucm9ib3RzIHx8ICdpbmRleCxmb2xsb3cnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmxvY2FsZScsIGNvbnRlbnQ6IG1ldGEubG9jYWxlIHx8ICdpdF9JVCcgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6IG1ldGEudHlwZSB8fCAnYXJ0aWNsZScgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6YXV0aG9yJywgY29udGVudDogbWV0YS5hdXRob3IgfHwgJ0V1cm9zcGluIFZpYWdnaScgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTGluayh7IHJlbDogJ2Nhbm9uaWNhbCcsIGhyZWY6IG1ldGEuY2Fub25pY2FsIHx8ICh0aGlzLm9yaWdpbi5pbmRleE9mKHBhZ2UudXJsKSA9PT0gMCA/IG51bGwgOiBwYWdlLnVybCkgfSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlT3V0bGV0Q29tcG9uZW50LmFkZE9yVXBkYXRlTWV0YURhdGEnLCBwYWdlLmlkLCBwYWdlLnRpdGxlLCBwYWdlLnVybCk7XG5cdH1cblxuXHRwcml2YXRlIGdldFNvY2lhbEltYWdlKHBhZ2U6IFBhZ2UpOiBJbWFnZSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSBwYWdlLmltYWdlcyA/IChcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5TaGFyZSkgfHxcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5EZWZhdWx0KSB8fFxuXHRcdFx0cGFnZS5pbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gSW1hZ2VUeXBlLkdhbGxlcnkpXG5cdFx0KSA6IG51bGw7XG5cdFx0cmV0dXJuIGltYWdlIHx8IHtcblx0XHRcdHVybDogJ2h0dHBzOi8vcy1zdGF0aWMuYWsuZmJjZG4ubmV0L2ltYWdlcy9kZXZzaXRlL2F0dGFjaG1lbnRfYmxhbmsucG5nJ1xuXHRcdH0gYXMgSW1hZ2U7XG5cdH1cblxuXHRwcml2YXRlIGFkZE9yVXBkYXRlTWV0YShkZWZpbml0aW9uOiBNZXRhRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gZGVmaW5pdGlvbi5uYW1lID8gYG5hbWU9XCIke2RlZmluaXRpb24ubmFtZX1cImAgOiBgcHJvcGVydHk9XCIke2RlZmluaXRpb24ucHJvcGVydHl9XCJgO1xuXHRcdGlmICh0aGlzLm1ldGFTZXJ2aWNlLmdldFRhZyhzZWxlY3RvcikpIHtcblx0XHRcdGlmIChkZWZpbml0aW9uLmNvbnRlbnQpIHtcblx0XHRcdFx0dGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoZGVmaW5pdGlvbiwgc2VsZWN0b3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoc2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGVmaW5pdGlvbi5jb250ZW50KSB7XG5cdFx0XHR0aGlzLm1ldGFTZXJ2aWNlLmFkZFRhZyhkZWZpbml0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZE9yVXBkYXRlTGluayhkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gZGVmaW5pdGlvbi5pZCA/IGAjJHtkZWZpbml0aW9uLmlkfWAgOiBgW3JlbD1cIiR7ZGVmaW5pdGlvbi5yZWx9XCJdYDtcblx0XHRpZiAodGhpcy5saW5rU2VydmljZS5nZXRUYWcoc2VsZWN0b3IpKSB7XG5cdFx0XHRpZiAoZGVmaW5pdGlvbi5ocmVmKSB7XG5cdFx0XHRcdHRoaXMubGlua1NlcnZpY2UudXBkYXRlVGFnKHNlbGVjdG9yLCBkZWZpbml0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGlua1NlcnZpY2UucmVtb3ZlVGFnKHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGRlZmluaXRpb24uaHJlZikge1xuXHRcdFx0dGhpcy5saW5rU2VydmljZS5hZGRUYWcoZGVmaW5pdGlvbik7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==