/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { EntityService, HttpStatusCodeService, ImageType } from '@designr/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LinkService } from './link.service';
import { Page } from './page';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./link.service";
import * as i3 from "@designr/core";
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
        // console.log('PageService', options);
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
        return this.stateGet("?slug=/" + slug).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            x = new Page(Array.isArray(x) ? x.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.slug === "/" + slug; })) : x);
            // console.log('PageService.getStatePageBySlug', x);
            return x;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // console.log('getStatePageBySlug.error', error);
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        })));
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
        map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new Page(x); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        })));
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
        map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new Page(x); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        })));
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
        return this.get("?slug=/" + slug).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new Page(x); })), 
        // tap(x => this.logger.log(`found pages matching "${slug}"`))
        // tap(x => console.log('PageService.getPageBySlug', x, slug))
        catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // console.log('PageService.getPageBySlug.error', error);
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        })));
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
        this.titleService.setTitle(page.title);
        this.addOrUpdateMeta({ property: 'og:title', content: page.title });
        this.addOrUpdateMeta({ property: 'og:image', content: this.getSocialImage(page).url });
        this.addOrUpdateMeta({ property: 'og:image:width', content: '1200' });
        this.addOrUpdateMeta({ property: 'og:image:height', content: '630' });
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
     * @param {?} page
     * @return {?}
     */
    PageService.prototype.getSocialImage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var image = page.images ? (page.images.find((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.type === ImageType.Share; })) ||
            page.images.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.type === ImageType.Default; })) ||
            page.images.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.type === ImageType.Gallery; }))) : null;
        return image || (/** @type {?} */ ({
            url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
        }));
    };
    /**
     * @param {?} definition
     * @return {?}
     */
    PageService.prototype.addOrUpdateMeta = /**
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
     * @param {?} definition
     * @return {?}
     */
    PageService.prototype.addOrUpdateLink = /**
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
    /** @type {?} */
    PageService.prototype.page;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxJQUFJLEVBQWtCLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUscUJBQXFCLEVBQVMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7O0FBRTlCO0lBR2lDLHVDQUFtQjtJQVFuRCxxQkFDVyxRQUFrQixFQUNwQixZQUFtQixFQUNuQixXQUFpQixFQUNqQixXQUF3QixFQUN4QixpQkFBd0M7UUFMakQsWUFPQyxrQkFBTSxRQUFRLENBQUMsU0FFZjtRQVJVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDcEIsa0JBQVksR0FBWixZQUFZLENBQU87UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUF1Qjs7UUFHaEQsdUNBQXVDO0lBQ3hDLENBQUM7SUFiRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7O0lBYUQsd0NBQWtCOzs7O0lBQWxCLFVBQW1CLElBQVk7UUFBL0IsaUJBaUJDO1FBaEJBLElBQUksR0FBRyxJ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QWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWV0YSwgTWV0YURlZmluaXRpb24sIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UsIEh0dHBTdGF0dXNDb2RlU2VydmljZSwgSW1hZ2UsIEltYWdlVHlwZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExpbmtEZWZpbml0aW9uLCBMaW5rU2VydmljZSB9IGZyb20gJy4vbGluay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlU2VydmljZSBleHRlbmRzIEVudGl0eVNlcnZpY2U8UGFnZT4ge1xyXG5cclxuXHRwdWJsaWMgcGFnZTogUGFnZTtcclxuXHJcblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiAnL2FwaS9wYWdlJztcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcclxuXHRcdHByaXZhdGUgbWV0YVNlcnZpY2U6IE1ldGEsXHJcblx0XHRwcml2YXRlIGxpbmtTZXJ2aWNlOiBMaW5rU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RhdHVzQ29kZVNlcnZpY2U6IEh0dHBTdGF0dXNDb2RlU2VydmljZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKGluamVjdG9yKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZScsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3RhdGVQYWdlQnlTbHVnKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZT4ge1xyXG5cdFx0c2x1ZyA9IHNsdWcuc3BsaXQoJz8nKVswXTtcclxuXHRcdGlmIChzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCkge1xyXG5cdFx0XHRzbHVnID0gc2x1Zy5zdWJzdHIoMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZUdldChgP3NsdWc9LyR7c2x1Z31gKS5waXBlKFxyXG5cdFx0XHRtYXAoeCA9PiB7XHJcblx0XHRcdFx0eCA9IG5ldyBQYWdlKEFycmF5LmlzQXJyYXkoeCkgPyB4LmZpbmQoeCA9PiB4LnNsdWcgPT09IGAvJHtzbHVnfWApIDogeCk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFN0YXRlUGFnZUJ5U2x1ZycsIHgpO1xyXG5cdFx0XHRcdHJldHVybiB4O1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldFN0YXRlUGFnZUJ5U2x1Zy5lcnJvcicsIGVycm9yKTtcclxuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XHJcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0XHR9KSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRTdGF0ZVBhZ2VCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0YXRlR2V0KGAvJHtpZH1gKS5waXBlKFxyXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCwgeCkpLFxyXG5cdFx0XHRtYXAoeCA9PiBuZXcgUGFnZSh4KSksXHJcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMsIGVycm9yLmVycm9yID8gZXJyb3IuZXJyb3IucmVkaXJlY3RVcmwgOiBudWxsKTtcclxuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0UGFnZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGAvJHtpZH1gKS5waXBlKFxyXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCwgeCkpLFxyXG5cdFx0XHRtYXAoeCA9PiBuZXcgUGFnZSh4KSksXHJcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMsIGVycm9yLmVycm9yID8gZXJyb3IuZXJyb3IucmVkaXJlY3RVcmwgOiBudWxsKTtcclxuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcclxuXHRcdHNsdWcgPSBzbHVnLnNwbGl0KCc7JylbMF07XHJcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHNsdWcpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGA/c2x1Zz0vJHtzbHVnfWApLnBpcGUoXHJcblx0XHRcdG1hcCh4ID0+IG5ldyBQYWdlKHgpKSxcclxuXHRcdFx0Ly8gdGFwKHggPT4gdGhpcy5sb2dnZXIubG9nKGBmb3VuZCBwYWdlcyBtYXRjaGluZyBcIiR7c2x1Z31cImApKVxyXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHgsIHNsdWcpKVxyXG5cdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1Zy5lcnJvcicsIGVycm9yKTtcclxuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XHJcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGFkZE9yVXBkYXRlTWV0YURhdGEocGFnZTogUGFnZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YURhdGEnLCBwYWdlKTtcclxuXHRcdGlmICghcGFnZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShwYWdlLnRpdGxlKTtcclxuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHBhZ2UudGl0bGUgfSk7XHJcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiB0aGlzLmdldFNvY2lhbEltYWdlKHBhZ2UpLnVybCB9KTtcclxuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZTp3aWR0aCcsIGNvbnRlbnQ6ICcxMjAwJyB9KTtcclxuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZTpoZWlnaHQnLCBjb250ZW50OiAnNjMwJyB9KTtcclxuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzp1cmwnLCBjb250ZW50OiBwYWdlLnVybCB8fCB0aGlzLm9yaWdpbiB9KTtcclxuXHRcdGNvbnN0IG1ldGEgPSBwYWdlLm1ldGE7XHJcblx0XHRpZiAobWV0YSkge1xyXG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IG1ldGEuZGVzY3JpcHRpb24gfHwgJ1NlcnZpemlvIGRpIHF1YWxpdMOgIHNlbnphIGNvc3RpIGFnZ2l1bnRpdmkgY29uIGkgY29udmVuaWVudGkgcGFjY2hldHRpIHZpYWdnaW8gRXVyb3NwaW4uIFByZW5vdGEgY29tb2RhbWVudGUgb25saW5lIScgfSk7XHJcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ2tleXdvcmRzJywgY29udGVudDogbWV0YS5rZXl3b3JkcyB8fCAndmlhZ2dpLHZpYWdnaSBldXJvc3BpbicgfSk7XHJcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6IG1ldGEucm9ib3RzIHx8ICdpbmRleCxmb2xsb3cnIH0pO1xyXG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6bG9jYWxlJywgY29udGVudDogbWV0YS5sb2NhbGUgfHwgJ2l0X0lUJyB9KTtcclxuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiBtZXRhLnR5cGUgfHwgJ2FydGljbGUnIH0pO1xyXG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6YXV0aG9yJywgY29udGVudDogbWV0YS5hdXRob3IgfHwgJ0V1cm9zcGluIFZpYWdnaScgfSk7XHJcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVMaW5rKHsgcmVsOiAnY2Fub25pY2FsJywgaHJlZjogbWV0YS5jYW5vbmljYWwgfHwgKHRoaXMub3JpZ2luLmluZGV4T2YocGFnZS51cmwpID09PSAwID8gbnVsbCA6IHBhZ2UudXJsKSB9KTtcclxuXHRcdH1cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlT3V0bGV0Q29tcG9uZW50LmFkZE9yVXBkYXRlTWV0YURhdGEnLCBwYWdlLmlkLCBwYWdlLnRpdGxlLCBwYWdlLnVybCk7XHJcblx0fVxyXG5cclxuXHRnZXRTb2NpYWxJbWFnZShwYWdlOiBQYWdlKTogSW1hZ2Uge1xyXG5cdFx0Y29uc3QgaW1hZ2UgPSBwYWdlLmltYWdlcyA/IChcclxuXHRcdFx0cGFnZS5pbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gSW1hZ2VUeXBlLlNoYXJlKSB8fFxyXG5cdFx0XHRwYWdlLmltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBJbWFnZVR5cGUuRGVmYXVsdCkgfHxcclxuXHRcdFx0cGFnZS5pbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gSW1hZ2VUeXBlLkdhbGxlcnkpXHJcblx0XHQpIDogbnVsbDtcclxuXHRcdHJldHVybiBpbWFnZSB8fCB7XHJcblx0XHRcdHVybDogJ2h0dHBzOi8vcy1zdGF0aWMuYWsuZmJjZG4ubmV0L2ltYWdlcy9kZXZzaXRlL2F0dGFjaG1lbnRfYmxhbmsucG5nJ1xyXG5cdFx0fSBhcyBJbWFnZTtcclxuXHR9XHJcblxyXG5cdGFkZE9yVXBkYXRlTWV0YShkZWZpbml0aW9uOiBNZXRhRGVmaW5pdGlvbikge1xyXG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBkZWZpbml0aW9uLm5hbWUgPyBgbmFtZT1cIiR7ZGVmaW5pdGlvbi5uYW1lfVwiYCA6IGBwcm9wZXJ0eT1cIiR7ZGVmaW5pdGlvbi5wcm9wZXJ0eX1cImA7XHJcblx0XHRpZiAodGhpcy5tZXRhU2VydmljZS5nZXRUYWcoc2VsZWN0b3IpKSB7XHJcblx0XHRcdGlmIChkZWZpbml0aW9uLmNvbnRlbnQpIHtcclxuXHRcdFx0XHR0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyhkZWZpbml0aW9uLCBzZWxlY3Rvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoc2VsZWN0b3IpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGRlZmluaXRpb24uY29udGVudCkge1xyXG5cdFx0XHR0aGlzLm1ldGFTZXJ2aWNlLmFkZFRhZyhkZWZpbml0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZE9yVXBkYXRlTGluayhkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xyXG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBkZWZpbml0aW9uLmlkID8gYCMke2RlZmluaXRpb24uaWR9YCA6IGBbcmVsPVwiJHtkZWZpbml0aW9uLnJlbH1cIl1gO1xyXG5cdFx0aWYgKHRoaXMubGlua1NlcnZpY2UuZ2V0VGFnKHNlbGVjdG9yKSkge1xyXG5cdFx0XHRpZiAoZGVmaW5pdGlvbi5ocmVmKSB7XHJcblx0XHRcdFx0dGhpcy5saW5rU2VydmljZS51cGRhdGVUYWcoc2VsZWN0b3IsIGRlZmluaXRpb24pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubGlua1NlcnZpY2UucmVtb3ZlVGFnKHNlbGVjdG9yKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChkZWZpbml0aW9uLmhyZWYpIHtcclxuXHRcdFx0dGhpcy5saW5rU2VydmljZS5hZGRUYWcoZGVmaW5pdGlvbik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=