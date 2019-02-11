/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpStatusCodeService } from '../http/http-status-code.service';
import { EntityService } from '../models/entity.service';
import { ImageType } from '../models/image';
import { LinkService } from './link.service';
import { Page } from './page';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./link.service";
import * as i3 from "../http/http-status-code.service";
var PageService = /** @class */ (function (_super) {
    tslib_1.__extends(PageService, _super);
    function PageService(injector, titleService, metaService, linkService, statusCodeService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.titleService = titleService;
        _this.metaService = metaService;
        _this.linkService = linkService;
        _this.statusCodeService = statusCodeService;
        return _this;
    }
    Object.defineProperty(PageService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/page';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} slug
     * @return {?}
     */
    PageService.prototype.getStatePageBySlug = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        var _this = this;
        slug = slug.split('?')[0];
        if (slug.indexOf('/') === 0) {
            slug = slug.substr(1);
        }
        return this.stateGet("?slug=/" + slug).pipe(map(function (x) {
            x = new Page(Array.isArray(x) ? x.find(function (x) { return x.slug === "/" + slug; }) : x);
            // console.log('PageService.getStatePageBySlug', x);
            return x;
        }), catchError(function (error) {
            // console.log('getStatePageBySlug.error', error);
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PageService.prototype.getStatePageById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return this.stateGet("/" + id).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(function (x) { return new Page(x); }), catchError(function (error) {
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PageService.prototype.getPageById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return this.get("/" + id).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(function (x) { return new Page(x); }), catchError(function (error) {
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    /**
     * @param {?} slug
     * @return {?}
     */
    PageService.prototype.getPageBySlug = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        var _this = this;
        slug = slug.split(';')[0];
        // console.log('PageService.getPageBySlug', slug);
        return this.get("?slug=/" + slug).pipe(map(function (x) { return new Page(x); }), 
        // tap(x => this.logger.log(`found pages matching "${slug}"`))
        // tap(x => console.log('PageService.getPageBySlug', x, slug))
        catchError(function (error) {
            // console.log('PageService.getPageBySlug.error', error);
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PageService.prototype.addOrUpdateMetaData = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
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
        var meta = page.meta;
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
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    PageService.prototype.getSocialImage = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var image = page.images ? (page.images.find(function (i) { return i.type === ImageType.Share; }) ||
            page.images.find(function (i) { return i.type === ImageType.Default; }) ||
            page.images.find(function (i) { return i.type === ImageType.Gallery; })) : null;
        return image || (/** @type {?} */ ({
            url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
        }));
    };
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    PageService.prototype.addOrUpdateMeta = /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    function (definition) {
        /** @type {?} */
        var selector = definition.name ? "name=\"" + definition.name + "\"" : "property=\"" + definition.property + "\"";
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
    };
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    PageService.prototype.addOrUpdateLink = /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    function (definition) {
        /** @type {?} */
        var selector = definition.id ? "#" + definition.id : "[rel=\"" + definition.rel + "\"]";
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
    };
    PageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PageService.ctorParameters = function () { return [
        { type: Injector },
        { type: Title },
        { type: Meta },
        { type: LinkService },
        { type: HttpStatusCodeService }
    ]; };
    /** @nocollapse */ PageService.ngInjectableDef = i0.defineInjectable({ factory: function PageService_Factory() { return new PageService(i0.inject(i0.INJECTOR), i0.inject(i1.Title), i0.inject(i1.Meta), i0.inject(i2.LinkService), i0.inject(i3.HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
    return PageService;
}(EntityService));
export { PageService };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFrQixLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7O0FBRTlCO0lBR2lDLHVDQUFtQjtJQU1uRCxxQkFDVyxRQUFrQixFQUNwQixZQUFtQixFQUNuQixXQUFpQixFQUNqQixXQUF3QixFQUN4QixpQkFBd0M7UUFMakQsWUFPQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQVBVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDcEIsa0JBQVksR0FBWixZQUFZLENBQU87UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUF1Qjs7SUFHakQsQ0FBQztJQVpELHNCQUFJLG1DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7Ozs7SUFZRCx3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Q0FBMkI7Ozs7O0lBQzNCLGtDQUF5Qjs7Ozs7SUFDekIsa0NBQWdDOzs7OztJQUNoQyx3Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YSwgTWV0YURlZmluaXRpb24sIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlIH0gZnJvbSAnLi4vaHR0cC9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZSwgSW1hZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlJztcbmltcG9ydCB7IExpbmtEZWZpbml0aW9uLCBMaW5rU2VydmljZSB9IGZyb20gJy4vbGluay5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2VydmljZSBleHRlbmRzIEVudGl0eVNlcnZpY2U8UGFnZT4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL3BhZ2UnO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG5cdFx0cHJpdmF0ZSBtZXRhU2VydmljZTogTWV0YSxcblx0XHRwcml2YXRlIGxpbmtTZXJ2aWNlOiBMaW5rU2VydmljZSxcblx0XHRwcml2YXRlIHN0YXR1c0NvZGVTZXJ2aWNlOiBIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdGdldFN0YXRlUGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRzbHVnID0gc2x1Zy5zcGxpdCgnPycpWzBdO1xuXHRcdGlmIChzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuXHRcdFx0c2x1ZyA9IHNsdWcuc3Vic3RyKDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdGF0ZUdldChgP3NsdWc9LyR7c2x1Z31gKS5waXBlKFxuXHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHR4ID0gbmV3IFBhZ2UoQXJyYXkuaXNBcnJheSh4KSA/IHguZmluZCh4ID0+IHguc2x1ZyA9PT0gYC8ke3NsdWd9YCkgOiB4KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFN0YXRlUGFnZUJ5U2x1ZycsIHgpO1xuXHRcdFx0XHRyZXR1cm4geDtcblx0XHRcdH0pLFxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdnZXRTdGF0ZVBhZ2VCeVNsdWcuZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMsIGVycm9yLmVycm9yID8gZXJyb3IuZXJyb3IucmVkaXJlY3RVcmwgOiBudWxsKTtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxuXG5cdGdldFN0YXRlUGFnZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZT4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlR2V0KGAvJHtpZH1gKS5waXBlKFxuXHRcdFx0Ly8gdGFwKHggPT4gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkJywgaWQsIHgpKSxcblx0XHRcdG1hcCh4ID0+IG5ldyBQYWdlKHgpKSxcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGdldFBhZ2VCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoYC8ke2lkfWApLnBpcGUoXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCwgeCkpLFxuXHRcdFx0bWFwKHggPT4gbmV3IFBhZ2UoeCkpLFxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMsIGVycm9yLmVycm9yID8gZXJyb3IuZXJyb3IucmVkaXJlY3RVcmwgOiBudWxsKTtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRzbHVnID0gc2x1Zy5zcGxpdCgnOycpWzBdO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRQYWdlQnlTbHVnJywgc2x1Zyk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGA/c2x1Zz0vJHtzbHVnfWApLnBpcGUoXG5cdFx0XHRtYXAoeCA9PiBuZXcgUGFnZSh4KSksXG5cdFx0XHQvLyB0YXAoeCA9PiB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIHBhZ2VzIG1hdGNoaW5nIFwiJHtzbHVnfVwiYCkpXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHgsIHNsdWcpKVxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRQYWdlQnlTbHVnLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGFkZE9yVXBkYXRlTWV0YURhdGEocGFnZTogUGFnZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5hZGRPclVwZGF0ZU1ldGFEYXRhJywgcGFnZSk7XG5cdFx0aWYgKCFwYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vICEhIVxuXHRcdC8vIGNvbnN0IGZiQXBwSWQ6IHN0cmluZyA9IHRoaXMuY29uZmlnLnBsdWdpbnMgJiYgdGhpcy5jb25maWcucGx1Z2lucy5mYWNlYm9vayA/IHRoaXMuY29uZmlnLnBsdWdpbnMuZmFjZWJvb2suYXBwSWQudG9TdHJpbmcoKSA6ICcnO1xuXHRcdHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHBhZ2UudGl0bGUpO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHBhZ2UudGl0bGUgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogdGhpcy5nZXRTb2NpYWxJbWFnZShwYWdlKS51cmwgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmltYWdlOndpZHRoJywgY29udGVudDogJzEyMDAnIH0pO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZTpoZWlnaHQnLCBjb250ZW50OiAnNjMwJyB9KTtcblx0XHQvLyB0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnZmI6YXBwX2lkJywgY29udGVudDogZmJBcHBJZCB9KTtcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogcGFnZS51cmwgfHwgdGhpcy5vcmlnaW4gfSk7XG5cdFx0Y29uc3QgbWV0YSA9IHBhZ2UubWV0YTtcblx0XHRpZiAobWV0YSkge1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiBtZXRhLmRlc2NyaXB0aW9uIHx8ICdTZXJ2aXppbyBkaSBxdWFsaXTDoCBzZW56YSBjb3N0aSBhZ2dpdW50aXZpIGNvbiBpIGNvbnZlbmllbnRpIHBhY2NoZXR0aSB2aWFnZ2lvIEV1cm9zcGluLiBQcmVub3RhIGNvbW9kYW1lbnRlIG9ubGluZSEnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiBtZXRhLmtleXdvcmRzIHx8ICd2aWFnZ2ksdmlhZ2dpIGV1cm9zcGluJyB9KTtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6IG1ldGEucm9ib3RzIHx8ICdpbmRleCxmb2xsb3cnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmxvY2FsZScsIGNvbnRlbnQ6IG1ldGEubG9jYWxlIHx8ICdpdF9JVCcgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6IG1ldGEudHlwZSB8fCAnYXJ0aWNsZScgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6YXV0aG9yJywgY29udGVudDogbWV0YS5hdXRob3IgfHwgJ0V1cm9zcGluIFZpYWdnaScgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTGluayh7IHJlbDogJ2Nhbm9uaWNhbCcsIGhyZWY6IG1ldGEuY2Fub25pY2FsIHx8ICh0aGlzLm9yaWdpbi5pbmRleE9mKHBhZ2UudXJsKSA9PT0gMCA/IG51bGwgOiBwYWdlLnVybCkgfSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlT3V0bGV0Q29tcG9uZW50LmFkZE9yVXBkYXRlTWV0YURhdGEnLCBwYWdlLmlkLCBwYWdlLnRpdGxlLCBwYWdlLnVybCk7XG5cdH1cblxuXHRwcml2YXRlIGdldFNvY2lhbEltYWdlKHBhZ2U6IFBhZ2UpOiBJbWFnZSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSBwYWdlLmltYWdlcyA/IChcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5TaGFyZSkgfHxcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5EZWZhdWx0KSB8fFxuXHRcdFx0cGFnZS5pbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gSW1hZ2VUeXBlLkdhbGxlcnkpXG5cdFx0KSA6IG51bGw7XG5cdFx0cmV0dXJuIGltYWdlIHx8IHtcblx0XHRcdHVybDogJ2h0dHBzOi8vcy1zdGF0aWMuYWsuZmJjZG4ubmV0L2ltYWdlcy9kZXZzaXRlL2F0dGFjaG1lbnRfYmxhbmsucG5nJ1xuXHRcdH0gYXMgSW1hZ2U7XG5cdH1cblxuXHRwcml2YXRlIGFkZE9yVXBkYXRlTWV0YShkZWZpbml0aW9uOiBNZXRhRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gZGVmaW5pdGlvbi5uYW1lID8gYG5hbWU9XCIke2RlZmluaXRpb24ubmFtZX1cImAgOiBgcHJvcGVydHk9XCIke2RlZmluaXRpb24ucHJvcGVydHl9XCJgO1xuXHRcdGlmICh0aGlzLm1ldGFTZXJ2aWNlLmdldFRhZyhzZWxlY3RvcikpIHtcblx0XHRcdGlmIChkZWZpbml0aW9uLmNvbnRlbnQpIHtcblx0XHRcdFx0dGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoZGVmaW5pdGlvbiwgc2VsZWN0b3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoc2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGVmaW5pdGlvbi5jb250ZW50KSB7XG5cdFx0XHR0aGlzLm1ldGFTZXJ2aWNlLmFkZFRhZyhkZWZpbml0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZE9yVXBkYXRlTGluayhkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gZGVmaW5pdGlvbi5pZCA/IGAjJHtkZWZpbml0aW9uLmlkfWAgOiBgW3JlbD1cIiR7ZGVmaW5pdGlvbi5yZWx9XCJdYDtcblx0XHRpZiAodGhpcy5saW5rU2VydmljZS5nZXRUYWcoc2VsZWN0b3IpKSB7XG5cdFx0XHRpZiAoZGVmaW5pdGlvbi5ocmVmKSB7XG5cdFx0XHRcdHRoaXMubGlua1NlcnZpY2UudXBkYXRlVGFnKHNlbGVjdG9yLCBkZWZpbml0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGlua1NlcnZpY2UucmVtb3ZlVGFnKHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGRlZmluaXRpb24uaHJlZikge1xuXHRcdFx0dGhpcy5saW5rU2VydmljZS5hZGRUYWcoZGVmaW5pdGlvbik7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==