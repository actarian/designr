(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/platform-browser'), require('@angular/common'), require('@designr/core'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@designr/page', ['exports', '@angular/router', '@angular/platform-browser', '@angular/common', '@designr/core', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.page = {}),global.ng.router,global.ng.platformBrowser,global.ng.common,global.i2$1,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,router,i2,i1,i2$1,rxjs,operators,i0) { 'use strict';

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
            { type: i0.Component, args: [{
                        selector: 'page-module',
                        template: "<span class=\"page-module\">page {{version}}</span>"
                    }] }
        ];
        /** @nocollapse */
        PageModuleComponent.ctorParameters = function () { return []; };
        return PageModuleComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
    var PAGE_CONFIG = new i0.InjectionToken('page.config');

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
             */ function () {
                return ( /** @type {?} */(this.injector.get(i0.PLATFORM_ID)));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageComponent.prototype, "routeService", {
            get: /**
             * @return {?}
             */ function () {
                return this.injector.get(i2$1.RouteService);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageComponent.prototype, "router", {
            get: /**
             * @return {?}
             */ function () {
                return this.injector.get(router.Router);
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
                if (i1.isPlatformBrowser(this.platformId)) {
                    // !!! Router dependancy manually activated
                    // const router = RouteService.injector.get(Router);
                    this.router.events.subscribe(function (e) {
                        if (!(e instanceof router.NavigationEnd)) {
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
            { type: i0.Component, args: [{
                        selector: 'core-page',
                        template: "<h1>I'm a default view!</h1>"
                    }] }
        ];
        /** @nocollapse */
        PageComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        PageComponent.propDecorators = {
            page: [{ type: i0.Input }],
            params: [{ type: i0.Input }],
            queryParams: [{ type: i0.Input }]
        };
        return PageComponent;
    }(i2$1.DisposableComponent));

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
            { type: i0.Component, args: [{
                        selector: 'page-not-found-component',
                        template: "<div class=\"container\">\n\t<h3>il file <span>{{url}}</span> non \u00E8 stato trovato</h3>\n</div>\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PageNotFoundComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        LinkService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ LinkService.ngInjectableDef = i0.defineInjectable({ factory: function LinkService_Factory() { return new LinkService(i0.inject(i1.DOCUMENT)); }, token: LinkService, providedIn: "root" });
        return LinkService;
    }());

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
                        // const item = new PageIndex(x.page);
                        /** @type {?} */
                        var item = new PageIndex(x);
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
             */ function () {
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
                return this.stateGet("?slug=/" + slug).pipe(operators.map(function (x) {
                    x = new Page(Array.isArray(x) ? x.find(function (x) { return x.slug === "/" + slug; }) : x);
                    // console.log('PageService.getStatePageBySlug', x);
                    return x;
                }), operators.catchError(function (error) {
                    // console.log('getStatePageBySlug.error', error);
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
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
                operators.map(function (x) { return new Page(x); }), operators.catchError(function (error) {
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
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
                operators.map(function (x) { return new Page(x); }), operators.catchError(function (error) {
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
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
                return this.get("?slug=/" + slug).pipe(operators.map(function (x) { return new Page(x); }), 
                // tap(x => this.logger.log(`found pages matching "${slug}"`))
                // tap(x => console.log('PageService.getPageBySlug', x, slug))
                operators.catchError(function (error) {
                    // console.log('PageService.getPageBySlug.error', error);
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
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
         * @param {?} page
         * @return {?}
         */
        PageService.prototype.getSocialImage = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                /** @type {?} */
                var image = page.images ? (page.images.find(function (i) { return i.type === i2$1.ImageType.Share; }) ||
                    page.images.find(function (i) { return i.type === i2$1.ImageType.Default; }) ||
                    page.images.find(function (i) { return i.type === i2$1.ImageType.Gallery; })) : null;
                return image || ( /** @type {?} */({
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PageService.ctorParameters = function () {
            return [
                { type: PageConfig, decorators: [{ type: i0.Inject, args: [PAGE_CONFIG,] }] },
                { type: i0.Injector },
                { type: i2.Title },
                { type: i2.Meta },
                { type: LinkService },
                { type: i2$1.HttpStatusCodeService }
            ];
        };
        /** @nocollapse */ PageService.ngInjectableDef = i0.defineInjectable({ factory: function PageService_Factory() { return new PageService(i0.inject(PAGE_CONFIG), i0.inject(i0.INJECTOR), i0.inject(i2.Title), i0.inject(i2.Meta), i0.inject(LinkService), i0.inject(i2$1.HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
        return PageService;
    }(i2$1.EntityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageOutletComponent = /** @class */ (function (_super) {
        __extends(PageOutletComponent, _super);
        function PageOutletComponent(viewContainerRef, router$$1, route, componentFactoryResolver, routeService, pageService) {
            var _this = _super.call(this) || this;
            _this.viewContainerRef = viewContainerRef;
            _this.router = router$$1;
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
                    this.pageService.page = data.pageResolver.page;
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
                        this.pageService.addOrUpdateMetaData(this.pageService.page);
                    }
                } /* else {
                    // console.log('PageOutletComponent.setSnapshot 404', data);
                }*/
            };
        PageOutletComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'page-outlet',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        PageOutletComponent.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef, decorators: [{ type: i0.Inject, args: [i0.ViewContainerRef,] }] },
                { type: router.Router },
                { type: router.ActivatedRoute },
                { type: i0.ComponentFactoryResolver },
                { type: i2$1.RouteService },
                { type: PageService }
            ];
        };
        return PageOutletComponent;
    }(i2$1.DisposableComponent));

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
            this.events$ = new rxjs.BehaviorSubject(null);
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
                return this.pageService.getPageById(id).pipe(operators.map(function (page) { return _this.pageToPageResolver(page); }));
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
                return this.pageService.getStatePageBySlug(slug).pipe(operators.map(function (page) { return _this.pageToPageResolver(page); }));
            };
        PageResolverService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PageResolverService.ctorParameters = function () {
            return [
                { type: PageService },
                { type: i2$1.RouteService }
            ];
        };
        /** @nocollapse */ PageResolverService.ngInjectableDef = i0.defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(i0.inject(PageService), i0.inject(i2$1.RouteService)); }, token: PageResolverService, providedIn: "root" });
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
            { type: i0.Injectable }
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
            { type: i0.Injectable }
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
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild(routes),
                        ],
                        exports: [
                            router.RouterModule,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i2$1.CoreModule,
                            PageRouting,
                        ],
                        providers: __spread(services, guards),
                        declarations: __spread(components),
                        exports: __spread([
                            i2$1.CoreModule,
                            PageRouting
                        ], components),
                    },] }
        ];
        /** @nocollapse */
        PageModule.ctorParameters = function () {
            return [
                { type: PageModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
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

    exports.PageModuleComponent = PageModuleComponent;
    exports.PageModule = PageModule;
    exports.PageRouting = PageRouting;
    exports.Page = Page;
    exports.PageIndex = PageIndex;
    exports.PageMeta = PageMeta;
    exports.PageRelation = PageRelation;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.PageOutletComponent = PageOutletComponent;
    exports.PageResolver = PageResolver;
    exports.PageResolverService = PageResolverService;
    exports.PageComponent = PageComponent;
    exports.PageGuard = PageGuard;
    exports.PageService = PageService;
    exports.StaticGuard = StaticGuard;
    exports.ɵb = PAGE_CONFIG;
    exports.ɵa = PageConfig;
    exports.ɵc = LinkService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-page.umd.js.map