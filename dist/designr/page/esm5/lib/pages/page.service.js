/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var PageService = /** @class */ (function (_super) {
    tslib_1.__extends(PageService, _super);
    function PageService(options, injector, titleService, metaService, linkService, statusCodeService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.titleService = titleService;
        _this.metaService = metaService;
        _this.linkService = linkService;
        _this.statusCodeService = statusCodeService;
        console.log('PageService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        _this.options = new PageConfig(options);
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
        { type: PageConfig, decorators: [{ type: Inject, args: [PAGE_CONFIG,] }] },
        { type: Injector },
        { type: Title },
        { type: Meta },
        { type: LinkService },
        { type: HttpStatusCodeService }
    ]; };
    /** @nocollapse */ PageService.ngInjectableDef = i0.defineInjectable({ factory: function PageService_Factory() { return new PageService(i0.inject(i1.PAGE_CONFIG), i0.inject(i0.INJECTOR), i0.inject(i2.Title), i0.inject(i2.Meta), i0.inject(i3.LinkService), i0.inject(i4.HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
    return PageService;
}(EntityService));
export { PageService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLElBQUksRUFBa0IsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBUyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFFOUI7SUFHaUMsdUNBQW1CO0lBUW5ELHFCQUNzQixPQUFtQixFQUM5QixRQUFrQixFQUNwQixZQUFtQixFQUNuQixXQUFpQixFQUNqQixXQUF3QixFQUN4QixpQkFBd0M7UUFOakQsWUFRQyxrQkFBTSxRQUFRLENBQUMsU0FNZjtRQVpVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDcEIsa0JBQVksR0FBWixZQUFZLENBQU87UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtRQUdoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsT0FBTyxJQUFJ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VUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFOUSxVQUFVLHVCQWdCaEIsTUFBTSxTQUFDLFdBQVc7Z0JBckJRLFFBQVE7Z0JBQ04sS0FBSztnQkFBM0IsSUFBSTtnQkFLWSxXQUFXO2dCQUpaLHFCQUFxQjs7O3NCQUY3QztDQTRKQyxBQW5KRCxDQUdpQyxhQUFhLEdBZ0o3QztTQWhKWSxXQUFXOzs7SUFFdkIsOEJBQTJCOzs7OztJQVExQiwrQkFBNEI7Ozs7O0lBQzVCLG1DQUEyQjs7Ozs7SUFDM0Isa0NBQXlCOzs7OztJQUN6QixrQ0FBZ0M7Ozs7O0lBQ2hDLHdDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGEsIE1ldGFEZWZpbml0aW9uLCBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSwgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlLCBJbWFnZSwgSW1hZ2VUeXBlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUNvbmZpZywgUEFHRV9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvcGFnZS5jb25maWcnO1xuaW1wb3J0IHsgTGlua0RlZmluaXRpb24sIExpbmtTZXJ2aWNlIH0gZnJvbSAnLi9saW5rLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxQYWdlPiB7XG5cblx0cHVibGljIG9wdGlvbnM6IFBhZ2VDb25maWc7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvcGFnZSc7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBBR0VfQ09ORklHKSBvcHRpb25zOiBQYWdlQ29uZmlnLFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxuXHRcdHByaXZhdGUgbWV0YVNlcnZpY2U6IE1ldGEsXG5cdFx0cHJpdmF0ZSBsaW5rU2VydmljZTogTGlua1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdGF0dXNDb2RlU2VydmljZTogSHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdFx0Y29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0Ly8gb3B0aW9ucy5kZWZhdWx0UGFnZSA9IChvcHRpb25zLmRlZmF1bHRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0XHQvLyBvcHRpb25zLm5vdEZvdW5kUGFnZSA9IChvcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFBhZ2VDb25maWcob3B0aW9ucyk7XG5cdH1cblxuXHRnZXRTdGF0ZVBhZ2VCeVNsdWcoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG5cdFx0c2x1ZyA9IHNsdWcuc3BsaXQoJz8nKVswXTtcblx0XHRpZiAoc2x1Zy5pbmRleE9mKCcvJykgPT09IDApIHtcblx0XHRcdHNsdWcgPSBzbHVnLnN1YnN0cigxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVHZXQoYD9zbHVnPS8ke3NsdWd9YCkucGlwZShcblx0XHRcdG1hcCh4ID0+IHtcblx0XHRcdFx0eCA9IG5ldyBQYWdlKEFycmF5LmlzQXJyYXkoeCkgPyB4LmZpbmQoeCA9PiB4LnNsdWcgPT09IGAvJHtzbHVnfWApIDogeCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRTdGF0ZVBhZ2VCeVNsdWcnLCB4KTtcblx0XHRcdFx0cmV0dXJuIHg7XG5cdFx0XHR9KSxcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0U3RhdGVQYWdlQnlTbHVnLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cblxuXHRnZXRTdGF0ZVBhZ2VCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZUdldChgLyR7aWR9YCkucGlwZShcblx0XHRcdC8vIHRhcCh4ID0+IGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRQYWdlQnlJZCcsIGlkLCB4KSksXG5cdFx0XHRtYXAoeCA9PiBuZXcgUGFnZSh4KSksXG5cdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0dGhpcy5zdGF0dXNDb2RlU2VydmljZS5zZXRTdGF0dXNDb2RlKGVycm9yLnN0YXR1cywgZXJyb3IuZXJyb3IgPyBlcnJvci5lcnJvci5yZWRpcmVjdFVybCA6IG51bGwpO1xuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRnZXRQYWdlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGAvJHtpZH1gKS5waXBlKFxuXHRcdFx0Ly8gdGFwKHggPT4gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkJywgaWQsIHgpKSxcblx0XHRcdG1hcCh4ID0+IG5ldyBQYWdlKHgpKSxcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGdldFBhZ2VCeVNsdWcoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG5cdFx0c2x1ZyA9IHNsdWcuc3BsaXQoJzsnKVswXTtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHNsdWcpO1xuXHRcdHJldHVybiB0aGlzLmdldChgP3NsdWc9LyR7c2x1Z31gKS5waXBlKFxuXHRcdFx0bWFwKHggPT4gbmV3IFBhZ2UoeCkpLFxuXHRcdFx0Ly8gdGFwKHggPT4gdGhpcy5sb2dnZXIubG9nKGBmb3VuZCBwYWdlcyBtYXRjaGluZyBcIiR7c2x1Z31cImApKVxuXHRcdFx0Ly8gdGFwKHggPT4gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFBhZ2VCeVNsdWcnLCB4LCBzbHVnKSlcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1Zy5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0dGhpcy5zdGF0dXNDb2RlU2VydmljZS5zZXRTdGF0dXNDb2RlKGVycm9yLnN0YXR1cywgZXJyb3IuZXJyb3IgPyBlcnJvci5lcnJvci5yZWRpcmVjdFVybCA6IG51bGwpO1xuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRhZGRPclVwZGF0ZU1ldGFEYXRhKHBhZ2U6IFBhZ2UpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuYWRkT3JVcGRhdGVNZXRhRGF0YScsIHBhZ2UpO1xuXHRcdGlmICghcGFnZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyAhISFcblx0XHQvLyBjb25zdCBmYkFwcElkOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5wbHVnaW5zICYmIHRoaXMuY29uZmlnLnBsdWdpbnMuZmFjZWJvb2sgPyB0aGlzLmNvbmZpZy5wbHVnaW5zLmZhY2Vib29rLmFwcElkLnRvU3RyaW5nKCkgOiAnJztcblx0XHR0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShwYWdlLnRpdGxlKTtcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBwYWdlLnRpdGxlIH0pO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IHRoaXMuZ2V0U29jaWFsSW1hZ2UocGFnZSkudXJsIH0pO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZTp3aWR0aCcsIGNvbnRlbnQ6ICcxMjAwJyB9KTtcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogJzYzMCcgfSk7XG5cdFx0Ly8gdGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ2ZiOmFwcF9pZCcsIGNvbnRlbnQ6IGZiQXBwSWQgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IHBhZ2UudXJsIHx8IHRoaXMub3JpZ2luIH0pO1xuXHRcdGNvbnN0IG1ldGEgPSBwYWdlLm1ldGE7XG5cdFx0aWYgKG1ldGEpIHtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogbWV0YS5kZXNjcmlwdGlvbiB8fCAnU2Vydml6aW8gZGkgcXVhbGl0w6Agc2VuemEgY29zdGkgYWdnaXVudGl2aSBjb24gaSBjb252ZW5pZW50aSBwYWNjaGV0dGkgdmlhZ2dpbyBFdXJvc3Bpbi4gUHJlbm90YSBjb21vZGFtZW50ZSBvbmxpbmUhJyB9KTtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ2tleXdvcmRzJywgY29udGVudDogbWV0YS5rZXl3b3JkcyB8fCAndmlhZ2dpLHZpYWdnaSBldXJvc3BpbicgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiBtZXRhLnJvYm90cyB8fCAnaW5kZXgsZm9sbG93JyB9KTtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzpsb2NhbGUnLCBjb250ZW50OiBtZXRhLmxvY2FsZSB8fCAnaXRfSVQnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiBtZXRhLnR5cGUgfHwgJ2FydGljbGUnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmF1dGhvcicsIGNvbnRlbnQ6IG1ldGEuYXV0aG9yIHx8ICdFdXJvc3BpbiBWaWFnZ2knIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZUxpbmsoeyByZWw6ICdjYW5vbmljYWwnLCBocmVmOiBtZXRhLmNhbm9uaWNhbCB8fCAodGhpcy5vcmlnaW4uaW5kZXhPZihwYWdlLnVybCkgPT09IDAgPyBudWxsIDogcGFnZS51cmwpIH0pO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZU91dGxldENvbXBvbmVudC5hZGRPclVwZGF0ZU1ldGFEYXRhJywgcGFnZS5pZCwgcGFnZS50aXRsZSwgcGFnZS51cmwpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRTb2NpYWxJbWFnZShwYWdlOiBQYWdlKTogSW1hZ2Uge1xuXHRcdGNvbnN0IGltYWdlID0gcGFnZS5pbWFnZXMgPyAoXG5cdFx0XHRwYWdlLmltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBJbWFnZVR5cGUuU2hhcmUpIHx8XG5cdFx0XHRwYWdlLmltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBJbWFnZVR5cGUuRGVmYXVsdCkgfHxcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5HYWxsZXJ5KVxuXHRcdCkgOiBudWxsO1xuXHRcdHJldHVybiBpbWFnZSB8fCB7XG5cdFx0XHR1cmw6ICdodHRwczovL3Mtc3RhdGljLmFrLmZiY2RuLm5ldC9pbWFnZXMvZGV2c2l0ZS9hdHRhY2htZW50X2JsYW5rLnBuZydcblx0XHR9IGFzIEltYWdlO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRPclVwZGF0ZU1ldGEoZGVmaW5pdGlvbjogTWV0YURlZmluaXRpb24pIHtcblx0XHRjb25zdCBzZWxlY3RvciA9IGRlZmluaXRpb24ubmFtZSA/IGBuYW1lPVwiJHtkZWZpbml0aW9uLm5hbWV9XCJgIDogYHByb3BlcnR5PVwiJHtkZWZpbml0aW9uLnByb3BlcnR5fVwiYDtcblx0XHRpZiAodGhpcy5tZXRhU2VydmljZS5nZXRUYWcoc2VsZWN0b3IpKSB7XG5cdFx0XHRpZiAoZGVmaW5pdGlvbi5jb250ZW50KSB7XG5cdFx0XHRcdHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKGRlZmluaXRpb24sIHNlbGVjdG9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGRlZmluaXRpb24uY29udGVudCkge1xuXHRcdFx0dGhpcy5tZXRhU2VydmljZS5hZGRUYWcoZGVmaW5pdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRPclVwZGF0ZUxpbmsoZGVmaW5pdGlvbjogTGlua0RlZmluaXRpb24pIHtcblx0XHRjb25zdCBzZWxlY3RvciA9IGRlZmluaXRpb24uaWQgPyBgIyR7ZGVmaW5pdGlvbi5pZH1gIDogYFtyZWw9XCIke2RlZmluaXRpb24ucmVsfVwiXWA7XG5cdFx0aWYgKHRoaXMubGlua1NlcnZpY2UuZ2V0VGFnKHNlbGVjdG9yKSkge1xuXHRcdFx0aWYgKGRlZmluaXRpb24uaHJlZikge1xuXHRcdFx0XHR0aGlzLmxpbmtTZXJ2aWNlLnVwZGF0ZVRhZyhzZWxlY3RvciwgZGVmaW5pdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxpbmtTZXJ2aWNlLnJlbW92ZVRhZyhzZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChkZWZpbml0aW9uLmhyZWYpIHtcblx0XHRcdHRoaXMubGlua1NlcnZpY2UuYWRkVGFnKGRlZmluaXRpb24pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=