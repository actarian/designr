import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { __spread, __extends } from 'tslib';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
export { CommonModule } from '@angular/common';
import { DisposableComponent, RouteService, EntityService, HttpStatusCodeService, ImageType, CoreModule } from '@designr/core';
import { of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Component, InjectionToken, Injector, Input, PLATFORM_ID, ViewEncapsulation, Inject, Injectable, NgModule, defineInjectable, inject, Optional, SkipSelf, ViewContainerRef, ComponentFactoryResolver, INJECTOR } from '@angular/core';
export { NgModule, Optional, SkipSelf, Type } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageModuleComponent = /** @class */ (function () {
    function PageModuleComponent() {
        this.version = '0.0.2';
    }
    /**
     * @return {?}
     */
    PageModuleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PageModuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-module',
                    template: "<span class=\"page-module\">page {{version}}</span>"
                }] }
    ];
    /** @nocollapse */
    PageModuleComponent.ctorParameters = function () { return []; };
    return PageModuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageConfig = /** @class */ (function () {
    function PageConfig(options) {
        this.pages = {};
        console.log('PageConfig', options);
        if (options) {
            this.pages = options.pages || {};
            this.defaultPage = options.defaultPage;
            this.notFoundPage = options.notFoundPage;
        }
    }
    return PageConfig;
}());
/** @type {?} */
var PAGE_CONFIG = new InjectionToken('page.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageMeta = /** @class */ (function () {
    function PageMeta() {
    }
    return PageMeta;
}());
var PageIndex = /** @class */ (function () {
    function PageIndex(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
    return PageIndex;
}());
var PageRelation = /** @class */ (function () {
    function PageRelation() {
    }
    return PageRelation;
}());
var Page = /** @class */ (function () {
    function Page(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                /** @type {?} */
                var related = options.related.map(function (x) {
                    /** @type {?} */
                    var item = new PageIndex(x.page);
                    item.relationType = x.type;
                    return item;
                });
                this.related = related;
            }
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    Page.prototype.getFeature = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.features.find(function (x) { return x.id === id; }) || null;
    };
    /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    Page.prototype.getFeatures = /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    function (type, n) {
        return this.features ? this.features.filter(function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); }).sort(function (a, b) { return a.type - b.type; }) : [];
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Page.prototype.getFeaturesByTypes = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.features ? this.features.filter(function (x) { return (type.indexOf(Number(x.type)) !== -1); }) : [];
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Page.prototype.getGroupedFeaturesByTypes = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        /** @type {?} */
        var groups = {};
        type.forEach(function (type) {
            /** @type {?} */
            var group = groups[type] || { features: [] };
            if (_this.features) {
                _this.features.forEach(function (x) {
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
    };
    return Page;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.scrollToTop();
        return _this;
    }
    Object.defineProperty(PageComponent.prototype, "platformId", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.injector.get(PLATFORM_ID)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "routeService", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(RouteService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "router", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    // !!! Scroll to top on page change
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
    PageComponent.prototype.scrollToTop = 
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
    function () {
        // !!! PLATFORM_ID dependancy manually activated
        // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
        if (isPlatformBrowser(this.platformId)) {
            // !!! Router dependancy manually activated
            // const router = RouteService.injector.get(Router);
            this.router.events.subscribe(function (e) {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    };
    /**
     * @return {?}
     */
    PageComponent.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    };
    /**
     * @return {?}
     */
    PageComponent.prototype.getSlug = /**
     * @return {?}
     */
    function () {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    };
    PageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-page',
                    template: "<h1>I'm a default view!</h1>"
                }] }
    ];
    /** @nocollapse */
    PageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    PageComponent.propDecorators = {
        page: [{ type: Input }],
        params: [{ type: Input }],
        queryParams: [{ type: Input }]
    };
    return PageComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageNotFoundComponent = /** @class */ (function (_super) {
    __extends(PageNotFoundComponent, _super);
    function PageNotFoundComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.url = _this.router.url;
        return _this;
    }
    PageNotFoundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-not-found-component',
                    template: "<div class=\"container\">\n\t<h3>il file <span>{{url}}</span> non \u00E8 stato trovato</h3>\n</div>\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PageNotFoundComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return PageNotFoundComponent;
}(PageComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LinkService = /** @class */ (function () {
    function LinkService(doc) {
        this.doc = doc;
    }
    /**
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.addTag = /**
     * @param {?} definition
     * @return {?}
     */
    function (definition) {
        /** @type {?} */
        var element = this.doc.createElement("link");
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    LinkService.prototype.getTag = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        return element;
    };
    /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.updateTag = /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    function (selector, definition) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        this.updateElementDefinition(element, definition);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    LinkService.prototype.removeTag = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        element.remove();
    };
    /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.updateElementDefinition = /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    function (element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    LinkService.prototype.updateElementAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    function (element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
    LinkService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LinkService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LinkService.ngInjectableDef = defineInjectable({ factory: function LinkService_Factory() { return new LinkService(inject(DOCUMENT)); }, token: LinkService, providedIn: "root" });
    return LinkService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageService = /** @class */ (function (_super) {
    __extends(PageService, _super);
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
    /** @nocollapse */ PageService.ngInjectableDef = defineInjectable({ factory: function PageService_Factory() { return new PageService(inject(PAGE_CONFIG), inject(INJECTOR), inject(Title), inject(Meta), inject(LinkService), inject(HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
    return PageService;
}(EntityService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageOutletComponent = /** @class */ (function (_super) {
    __extends(PageOutletComponent, _super);
    function PageOutletComponent(viewContainerRef, router, route, componentFactoryResolver, routeService, pageService) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.router = router;
        _this.route = route;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.routeService = routeService;
        _this.pageService = pageService;
        // !!! keep -> Avoid PageOutlet Route Caching for different routes
        _this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        _this.setSnapshot(_this.route.snapshot);
        return _this;
    }
    /**
     * @param {?} snapshot
     * @return {?}
     */
    PageOutletComponent.prototype.setSnapshot = /**
     * @param {?} snapshot
     * @return {?}
     */
    function (snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        /** @type {?} */
        var data = snapshot.data;
        /** @type {?} */
        var params = this.routeService.params;
        /** @type {?} */
        var queryParams = this.routeService.queryParams;
        /** @type {?} */
        var component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            this.routeService.page = data.pageResolver.page;
            /** @type {?} */
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.factory = factory;
            this.viewContainerRef.clear();
            /** @type {?} */
            var componentRef = this.viewContainerRef.createComponent(this.factory);
            /** @type {?} */
            var instance = componentRef.instance;
            instance.page = data.pageResolver.page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            if (data.pageResolver.page) {
                /** @type {?} */
                var config = this.router.config.slice();
                /** @type {?} */
                var slug = data.pageResolver.page.slug;
                if (slug) {
                    config.push({
                        path: slug.indexOf('/') === 0 ? slug.substr(1) : slug, component: data.pageResolver.component,
                    });
                    this.router.resetConfig(config);
                }
                this.pageService.addOrUpdateMetaData(this.routeService.page);
            }
        } /* else {
            // console.log('PageOutletComponent.setSnapshot 404', data);
        }*/
    };
    PageOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-outlet',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    PageOutletComponent.ctorParameters = function () { return [
        { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
        { type: Router },
        { type: ActivatedRoute },
        { type: ComponentFactoryResolver },
        { type: RouteService },
        { type: PageService }
    ]; };
    return PageOutletComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageResolver = /** @class */ (function () {
    function PageResolver(pageService, page) {
        this.pageService = pageService;
        this.page = page;
        this.component = PageComponent;
        if (page && this.pageService.options.pages) {
            this.component = this.pageService.options.pages[page.component] || this.pageService.options.defaultPage;
        }
        else {
            this.component = this.pageService.options.notFoundPage || PageNotFoundComponent;
        }
    }
    return PageResolver;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageResolverService = /** @class */ (function () {
    function PageResolverService(pageService, routeService) {
        this.pageService = pageService;
        this.routeService = routeService;
        this.events$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    PageResolverService.prototype.pageToPageResolver = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var pageResolver = new PageResolver(this.pageService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    PageResolverService.prototype.resolve = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            /** @type {?} */
            var paths = route.url.filter(function (x) {
                return x.path;
            }).map(function (x) {
                return x.path;
            });
            /** @type {?} */
            var slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PageResolverService.prototype.getPageById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    /**
     * @param {?} slug
     * @return {?}
     */
    PageResolverService.prototype.getPageBySlug = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        var _this = this;
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    PageResolverService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PageResolverService.ctorParameters = function () { return [
        { type: PageService },
        { type: RouteService }
    ]; };
    /** @nocollapse */ PageResolverService.ngInjectableDef = defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(inject(PageService), inject(RouteService)); }, token: PageResolverService, providedIn: "root" });
    return PageResolverService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageGuard = /** @class */ (function () {
    function PageGuard() {
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    PageGuard.prototype.match = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        /** @type {?} */
        var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        /** @type {?} */
        var match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    PageGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.match(route);
    };
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    PageGuard.prototype.canDeactivate = /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    function (component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    };
    PageGuard.decorators = [
        { type: Injectable }
    ];
    return PageGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StaticGuard = /** @class */ (function () {
    function StaticGuard() {
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    StaticGuard.prototype.match = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var lastPath = route.url[route.url.length - 1].path;
        // console.log('StaticGuard.CanActivate', e, lastPath);
        /** @type {?} */
        var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        /** @type {?} */
        var match = (lastPath).match(pattern);
        if (match !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    StaticGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.match(route);
    };
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    StaticGuard.prototype.canDeactivate = /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    function (component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    };
    StaticGuard.decorators = [
        { type: Injectable }
    ];
    return StaticGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
var PageRouting = /** @class */ (function () {
    function PageRouting() {
    }
    PageRouting.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild(routes),
                    ],
                    exports: [
                        RouterModule,
                    ],
                },] }
    ];
    return PageRouting;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var modules = [
    CoreModule,
    PageRouting,
];
/** @type {?} */
var services = [
    PageService,
];
/** @type {?} */
var components = [
    PageModuleComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
];
/** @type {?} */
var guards = [
    PageGuard,
    StaticGuard,
];
var PageModule = /** @class */ (function () {
    function PageModule(parentModule) {
        if (parentModule) {
            throw new Error('PageModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: PageModule,
            providers: [{
                    provide: PAGE_CONFIG, useValue: config
                }]
        };
    };
    PageModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    providers: __spread(services, guards),
                    declarations: __spread(components),
                    exports: __spread(modules, components),
                },] }
    ];
    /** @nocollapse */
    PageModule.ctorParameters = function () { return [
        { type: PageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PageModuleComponent, PageModule, PageRouting, Page, PageIndex, PageMeta, PageRelation, PageNotFoundComponent, PageOutletComponent, PageResolver, PageResolverService, PageComponent, PageGuard, PageService, StaticGuard, PAGE_CONFIG as ɵb, PageConfig as ɵa, LinkService as ɵc };

//# sourceMappingURL=designr-page.js.map