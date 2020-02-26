import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineDirective, ɵɵelementContainer, ɵɵdefineComponent, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, Component, Input, ɵɵdirectiveInject, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Directive, ɵɵtext, ɵɵtextInterpolate1, PLATFORM_ID, Injector, ɵɵInheritDefinitionFeature, ɵɵtextInterpolate, ViewEncapsulation, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgClass, NgTemplateOutlet, isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { __extends, __spread } from 'tslib';
import { RouteService, DisposableComponent, ImageType, HttpStatusCodeService, EntityService, CoreModule } from '@designr/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { map, catchError } from 'rxjs/operators';

var PageConfig = /** @class */ (function () {
    function PageConfig(options) {
        this.pages = {};
        this.layouts = {};
        // console.log('PageConfig', options);
        if (options) {
            this.layouts = options.layouts || {};
            this.defaultLayout = options.defaultLayout;
            this.pages = options.pages || {};
            this.defaultPage = options.defaultPage;
            this.notFoundPage = options.notFoundPage;
        }
    }
    return PageConfig;
}());
var PAGE_CONFIG = new InjectionToken('page.config');

var ConfigService = /** @class */ (function () {
    function ConfigService(options) {
        this.options = new PageConfig(options || {});
    }
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(ɵɵinject(PAGE_CONFIG)); };
    ConfigService.ɵprov = ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
    return ConfigService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: PageConfig, decorators: [{
                type: Inject,
                args: [PAGE_CONFIG]
            }] }]; }, null); })();

var ILayoutComponent = /** @class */ (function () {
    function ILayoutComponent() {
    }
    ILayoutComponent.ɵfac = function ILayoutComponent_Factory(t) { return new (t || ILayoutComponent)(); };
    ILayoutComponent.ɵdir = ɵɵdefineDirective({ type: ILayoutComponent, inputs: { template: "template" } });
    return ILayoutComponent;
}());

function LayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
    LayoutComponent.ɵcmp = ɵɵdefineComponent({ type: LayoutComponent, selectors: [["layout-component"]], inputs: { template: "template" }, decls: 2, vars: 2, consts: [[3, "ngClass"], [4, "ngTemplateOutlet"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, LayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.page == null ? null : ctx.page.component);
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.template);
        } }, directives: [NgClass, NgTemplateOutlet], encapsulation: 2 });
    return LayoutComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: 'layout-component',
                template: "<div [ngClass]=\"page?.component\">\n\t<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</div>"
            }]
    }], null, { template: [{
            type: Input
        }] }); })();

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
                var related = options.related.map(function (x) {
                    // const item = new PageIndex(x.page);
                    var item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                });
                this.related = related;
            }
        }
    }
    Page.prototype.getFeature = function (id) {
        return this.features.find(function (x) { return x.id === id; }) || null;
    };
    Page.prototype.getFeatures = function (type, n) {
        return this.features ? this.features.filter(function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); }).sort(function (a, b) { return a.type - b.type; }) : [];
    };
    Page.prototype.getFeaturesByTypes = function (type) {
        return this.features ? this.features.filter(function (x) { return (type.indexOf(Number(x.type)) !== -1); }) : [];
    };
    Page.prototype.getGroupedFeaturesByTypes = function (type) {
        var _this = this;
        var groups = {};
        type.forEach(function (type) {
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

var UseLayoutDirective = /** @class */ (function () {
    function UseLayoutDirective(templateRef, viewContainerRef, componentFactoryResolver, configService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.configService = configService;
    }
    UseLayoutDirective.prototype.ngOnInit = function () {
        var options = this.configService.options;
        var component = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
        var containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container = this.viewContainerRef.createComponent(containerFactory);
        this.container.instance.template = this.templateRef;
        this.container.instance.page = this.page;
    };
    UseLayoutDirective.prototype.ngOnDestroy = function () {
        if (this.container) {
            this.container.destroy();
            this.container = null;
        }
    };
    UseLayoutDirective.ɵfac = function UseLayoutDirective_Factory(t) { return new (t || UseLayoutDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(ConfigService)); };
    UseLayoutDirective.ɵdir = ɵɵdefineDirective({ type: UseLayoutDirective, selectors: [["", "useLayout", ""]], inputs: { layoutKey: ["useLayout", "layoutKey"], page: "page" } });
    return UseLayoutDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UseLayoutDirective, [{
        type: Directive,
        args: [{
                selector: '[useLayout]'
            }]
    }], function () { return [{ type: TemplateRef }, { type: ViewContainerRef }, { type: ComponentFactoryResolver }, { type: ConfigService }]; }, { layoutKey: [{
            type: Input,
            args: ['useLayout']
        }], page: [{
            type: Input
        }] }); })();

var PageModuleComponent = /** @class */ (function () {
    function PageModuleComponent() {
        this.version = '0.0.12';
    }
    PageModuleComponent.prototype.ngOnInit = function () {
    };
    PageModuleComponent.ɵfac = function PageModuleComponent_Factory(t) { return new (t || PageModuleComponent)(); };
    PageModuleComponent.ɵcmp = ɵɵdefineComponent({ type: PageModuleComponent, selectors: [["page-module"]], decls: 2, vars: 1, consts: [[1, "page-module"]], template: function PageModuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1("page ", ctx.version, "");
        } }, encapsulation: 2 });
    return PageModuleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageModuleComponent, [{
        type: Component,
        args: [{
                selector: 'page-module',
                template: "<span class=\"page-module\">page {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();

var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.scrollToTop();
        return _this;
    }
    Object.defineProperty(PageComponent.prototype, "platformId", {
        get: function () {
            return this.injector.get(PLATFORM_ID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "routeService", {
        get: function () {
            return this.injector.get(RouteService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "router", {
        get: function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    // !!! Scroll to top on page change
    PageComponent.prototype.scrollToTop = function () {
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
    PageComponent.prototype.getId = function () {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    };
    PageComponent.prototype.getSlug = function () {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    };
    PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(ɵɵdirectiveInject(Injector)); };
    PageComponent.ɵcmp = ɵɵdefineComponent({ type: PageComponent, selectors: [["core-page"]], inputs: { page: "page", params: "params", queryParams: "queryParams" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "page"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtext(1, "Page not found!");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return PageComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageComponent, [{
        type: Component,
        args: [{
                selector: 'core-page',
                template: "<div class=\"page\">Page not found!</div>",
            }]
    }], function () { return [{ type: Injector }]; }, { page: [{
            type: Input
        }], params: [{
            type: Input
        }], queryParams: [{
            type: Input
        }] }); })();

var PageNotFoundComponent = /** @class */ (function (_super) {
    __extends(PageNotFoundComponent, _super);
    function PageNotFoundComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.url = _this.router.url;
        return _this;
    }
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(ɵɵdirectiveInject(Injector)); };
    PageNotFoundComponent.ɵcmp = ɵɵdefineComponent({ type: PageNotFoundComponent, selectors: [["page-not-found-component"]], features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 1, consts: [[1, "page"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtext(1, "Page ");
            ɵɵelementStart(2, "span");
            ɵɵtext(3);
            ɵɵelementEnd();
            ɵɵtext(4, " not found");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵtextInterpolate(ctx.url);
        } }, encapsulation: 2 });
    return PageNotFoundComponent;
}(PageComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageNotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'page-not-found-component',
                template: "<div class=\"page\">Page <span>{{url}}</span> not found</div>",
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

var LinkDefinition = /** @class */ (function () {
    function LinkDefinition() {
    }
    return LinkDefinition;
}());
var LinkService = /** @class */ (function () {
    function LinkService(doc) {
        this.doc = doc;
    }
    LinkService.prototype.addTag = function (definition) {
        var element = this.doc.createElement("link");
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    };
    LinkService.prototype.getTag = function (selector) {
        var element = this.doc.querySelector("link" + selector);
        return element;
    };
    LinkService.prototype.updateTag = function (selector, definition) {
        var element = this.doc.querySelector("link" + selector);
        this.updateElementDefinition(element, definition);
    };
    LinkService.prototype.removeTag = function (selector) {
        var element = this.doc.querySelector("link" + selector);
        element.remove();
    };
    LinkService.prototype.updateElementDefinition = function (element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    };
    LinkService.prototype.updateElementAttribute = function (element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
    LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(ɵɵinject(DOCUMENT)); };
    LinkService.ɵprov = ɵɵdefineInjectable({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });
    return LinkService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LinkService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

var PageService = /** @class */ (function (_super) {
    __extends(PageService, _super);
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
        get: function () {
            return '/api/page';
        },
        enumerable: true,
        configurable: true
    });
    PageService.prototype.getStatePageBySlug = function (slug) {
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
    PageService.prototype.getStatePageById = function (id) {
        var _this = this;
        return this.stateGet("/" + id).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(function (x) { return new Page(x); }), catchError(function (error) {
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    PageService.prototype.getPageById = function (id) {
        var _this = this;
        return this.get("/" + id).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(function (x) { return new Page(x); }), catchError(function (error) {
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    PageService.prototype.getPageBySlug = function (slug) {
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
    PageService.prototype.addOrUpdateMetaData = function (page) {
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
    PageService.prototype.getSocialImage = function (page) {
        var image = page.images ? (page.images.find(function (i) { return i.type === ImageType.Share; }) ||
            page.images.find(function (i) { return i.type === ImageType.Default; }) ||
            page.images.find(function (i) { return i.type === ImageType.Gallery; })) : null;
        return image || {
            url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
        };
    };
    PageService.prototype.addOrUpdateMeta = function (definition) {
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
    PageService.prototype.addOrUpdateLink = function (definition) {
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
    PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(ɵɵinject(Injector), ɵɵinject(Title), ɵɵinject(Meta), ɵɵinject(LinkService), ɵɵinject(HttpStatusCodeService)); };
    PageService.ɵprov = ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac, providedIn: 'root' });
    return PageService;
}(EntityService));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }, { type: Title }, { type: Meta }, { type: LinkService }, { type: HttpStatusCodeService }]; }, null); })();

var _c0 = ["outlet"];
function PageOutletComponent_ng_template_0_Template(rf, ctx) { }
var PageOutletComponent = /** @class */ (function (_super) {
    __extends(PageOutletComponent, _super);
    function PageOutletComponent(router, route, componentFactoryResolver, routeService, pageService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.routeService = routeService;
        _this.pageService = pageService;
        // !!! keep -> Avoid PageOutlet Route Caching for different routes
        _this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        return _this;
    }
    PageOutletComponent.prototype.ngOnInit = function () {
        this.setSnapshot(this.route.snapshot);
    };
    PageOutletComponent.prototype.setSnapshot = function (snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        var data = snapshot.data;
        var params = this.routeService.params;
        var queryParams = this.routeService.queryParams;
        var component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            var page = data.pageResolver.page;
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            var componentRef = this.viewContainerRef.createComponent(factory);
            var instance = componentRef.instance;
            instance.page = page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            this.componentRef = componentRef;
            if (page) {
                var config = this.router.config.slice();
                var slug = page.slug;
                if (slug) {
                    config.push({
                        path: slug.indexOf('/') === 0 ? slug.substr(1) : slug, component: component,
                    });
                    this.router.resetConfig(config);
                }
                this.pageService.addOrUpdateMetaData(page);
            }
        } /* else {
            // console.log('PageOutletComponent.setSnapshot 404', data);
        }*/
    };
    PageOutletComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    PageOutletComponent.ɵfac = function PageOutletComponent_Factory(t) { return new (t || PageOutletComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(RouteService), ɵɵdirectiveInject(PageService)); };
    PageOutletComponent.ɵcmp = ɵɵdefineComponent({ type: PageOutletComponent, selectors: [["page-outlet"]], viewQuery: function PageOutletComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
        } }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["outlet", ""]], template: function PageOutletComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, PageOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return PageOutletComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageOutletComponent, [{
        type: Component,
        args: [{
                selector: 'page-outlet',
                template: '<ng-template #outlet></ng-template>',
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: ComponentFactoryResolver }, { type: RouteService }, { type: PageService }]; }, { viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: true }]
        }] }); })();

var PageResolver = /** @class */ (function () {
    function PageResolver(configService, page) {
        this.configService = configService;
        this.page = page;
        this.component = PageComponent;
        if (page && this.configService.options.pages) {
            this.component = this.configService.options.pages[page.component] || this.configService.options.defaultPage;
        }
        else {
            this.component = this.configService.options.notFoundPage || PageNotFoundComponent;
        }
    }
    return PageResolver;
}());

var PageResolverService = /** @class */ (function () {
    function PageResolverService(configService, pageService, routeService) {
        this.configService = configService;
        this.pageService = pageService;
        this.routeService = routeService;
        this.events$ = new BehaviorSubject(null);
    }
    PageResolverService.prototype.pageToPageResolver = function (page) {
        var pageResolver = new PageResolver(this.configService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    };
    PageResolverService.prototype.resolve = function (route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            var paths = route.url.filter(function (x) {
                return x.path;
            }).map(function (x) {
                return x.path;
            });
            var slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    };
    PageResolverService.prototype.getPageById = function (id) {
        var _this = this;
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    PageResolverService.prototype.getPageBySlug = function (slug) {
        var _this = this;
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    PageResolverService.ɵfac = function PageResolverService_Factory(t) { return new (t || PageResolverService)(ɵɵinject(ConfigService), ɵɵinject(PageService), ɵɵinject(RouteService)); };
    PageResolverService.ɵprov = ɵɵdefineInjectable({ token: PageResolverService, factory: PageResolverService.ɵfac, providedIn: 'root' });
    return PageResolverService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageResolverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ConfigService }, { type: PageService }, { type: RouteService }]; }, null); })();

var PageGuard = /** @class */ (function () {
    function PageGuard() {
    }
    PageGuard.prototype.match = function (route) {
        var lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        var match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    };
    PageGuard.prototype.canActivate = function (route, state) {
        return this.match(route);
    };
    PageGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    };
    PageGuard.ɵfac = function PageGuard_Factory(t) { return new (t || PageGuard)(); };
    PageGuard.ɵprov = ɵɵdefineInjectable({ token: PageGuard, factory: PageGuard.ɵfac });
    return PageGuard;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageGuard, [{
        type: Injectable
    }], null, null); })();

var StaticGuard = /** @class */ (function () {
    function StaticGuard() {
    }
    StaticGuard.prototype.match = function (route) {
        var lastPath = route.url[route.url.length - 1].path;
        // console.log('StaticGuard.CanActivate', e, lastPath);
        var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        var match = (lastPath).match(pattern);
        if (match !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    StaticGuard.prototype.canActivate = function (route, state) {
        return this.match(route);
    };
    StaticGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    };
    StaticGuard.ɵfac = function StaticGuard_Factory(t) { return new (t || StaticGuard)(); };
    StaticGuard.ɵprov = ɵɵdefineInjectable({ token: StaticGuard, factory: StaticGuard.ɵfac });
    return StaticGuard;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(StaticGuard, [{
        type: Injectable
    }], null, null); })();

var routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
var PageRouting = /** @class */ (function () {
    function PageRouting() {
    }
    PageRouting.ɵmod = ɵɵdefineNgModule({ type: PageRouting });
    PageRouting.ɵinj = ɵɵdefineInjector({ factory: function PageRouting_Factory(t) { return new (t || PageRouting)(); }, imports: [[
                RouterModule.forChild(routes),
            ],
            RouterModule] });
    return PageRouting;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PageRouting, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageRouting, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forChild(routes),
                ],
                exports: [
                    RouterModule,
                ],
            }]
    }], null, null); })();

var services = [
    ConfigService,
    PageService,
];
var components = [
    PageModuleComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
    LayoutComponent,
];
var directives = [
    UseLayoutDirective
];
var pipes = [];
var validators = [];
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
    PageModule.forRoot = function (config) {
        return {
            ngModule: PageModule,
            providers: [{
                    provide: PAGE_CONFIG, useValue: config
                }]
        };
    };
    PageModule.ɵmod = ɵɵdefineNgModule({ type: PageModule });
    PageModule.ɵinj = ɵɵdefineInjector({ factory: function PageModule_Factory(t) { return new (t || PageModule)(ɵɵinject(PageModule, 12)); }, providers: __spread(services, guards), imports: [[
                CommonModule,
                CoreModule,
                PageRouting,
            ],
            CoreModule,
            PageRouting] });
    return PageModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PageModule, { declarations: [PageModuleComponent,
        PageComponent,
        PageNotFoundComponent,
        PageOutletComponent,
        LayoutComponent,
        UseLayoutDirective], imports: [CommonModule,
        CoreModule,
        PageRouting], exports: [CoreModule,
        PageRouting,
        PageModuleComponent,
        PageComponent,
        PageNotFoundComponent,
        PageOutletComponent,
        LayoutComponent,
        UseLayoutDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                    PageRouting,
                ],
                providers: __spread(services, guards),
                declarations: __spread(components, directives),
                entryComponents: __spread(components),
                exports: __spread([
                    CoreModule,
                    PageRouting
                ], components, directives),
            }]
    }], function () { return [{ type: PageModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ConfigService, ILayoutComponent, LayoutComponent, PAGE_CONFIG, Page, PageComponent, PageConfig, PageGuard, PageIndex, PageMeta, PageModule, PageModuleComponent, PageNotFoundComponent, PageOutletComponent, PageRelation, PageResolver, PageResolverService, PageRouting, PageService, StaticGuard, UseLayoutDirective };
//# sourceMappingURL=designr-page.js.map
