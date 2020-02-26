import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineDirective, ɵɵelementContainer, ɵɵdefineComponent, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, Component, Input, ɵɵdirectiveInject, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Directive, ɵɵtext, ɵɵtextInterpolate1, PLATFORM_ID, Injector, ɵɵInheritDefinitionFeature, ɵɵtextInterpolate, ViewEncapsulation, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgClass, NgTemplateOutlet, isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { DisposableComponent, RouteService, EntityService, ImageType, HttpStatusCodeService, CoreModule } from '@designr/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { map, catchError } from 'rxjs/operators';

class PageConfig {
    constructor(options) {
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
}
const PAGE_CONFIG = new InjectionToken('page.config');

class ConfigService {
    constructor(options) {
        this.options = new PageConfig(options || {});
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(ɵɵinject(PAGE_CONFIG)); };
ConfigService.ɵprov = ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: PageConfig, decorators: [{
                type: Inject,
                args: [PAGE_CONFIG]
            }] }]; }, null); })();

class ILayoutComponent {
}
ILayoutComponent.ɵfac = function ILayoutComponent_Factory(t) { return new (t || ILayoutComponent)(); };
ILayoutComponent.ɵdir = ɵɵdefineDirective({ type: ILayoutComponent, inputs: { template: "template" } });

function LayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
class LayoutComponent {
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: 'layout-component',
                template: `<div [ngClass]="page?.component">
	<ng-container *ngTemplateOutlet="template"></ng-container>
</div>`
            }]
    }], null, { template: [{
            type: Input
        }] }); })();

class PageMeta {
}
class PageIndex {
    constructor(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
}
class PageRelation {
}
class Page {
    constructor(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                const related = options.related.map((x) => {
                    // const item = new PageIndex(x.page);
                    const item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                });
                this.related = related;
            }
        }
    }
    getFeature(id) {
        return this.features.find(x => x.id === id) || null;
    }
    getFeatures(type, n) {
        return this.features ? this.features.filter((x, i) => (n.indexOf(Number(x.id)) !== -1 && x.type === type)).sort((a, b) => a.type - b.type) : [];
    }
    getFeaturesByTypes(type) {
        return this.features ? this.features.filter((x) => (type.indexOf(Number(x.type)) !== -1)) : [];
    }
    getGroupedFeaturesByTypes(type) {
        const groups = {};
        type.forEach(type => {
            const group = groups[type] || { features: [] };
            if (this.features) {
                this.features.forEach((x) => {
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

class UseLayoutDirective {
    constructor(templateRef, viewContainerRef, componentFactoryResolver, configService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.configService = configService;
    }
    ngOnInit() {
        const options = this.configService.options;
        const component = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
        const containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container = this.viewContainerRef.createComponent(containerFactory);
        this.container.instance.template = this.templateRef;
        this.container.instance.page = this.page;
    }
    ngOnDestroy() {
        if (this.container) {
            this.container.destroy();
            this.container = null;
        }
    }
}
UseLayoutDirective.ɵfac = function UseLayoutDirective_Factory(t) { return new (t || UseLayoutDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(ConfigService)); };
UseLayoutDirective.ɵdir = ɵɵdefineDirective({ type: UseLayoutDirective, selectors: [["", "useLayout", ""]], inputs: { layoutKey: ["useLayout", "layoutKey"], page: "page" } });
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

class PageModuleComponent {
    constructor() {
        this.version = '0.0.12';
    }
    ngOnInit() {
    }
}
PageModuleComponent.ɵfac = function PageModuleComponent_Factory(t) { return new (t || PageModuleComponent)(); };
PageModuleComponent.ɵcmp = ɵɵdefineComponent({ type: PageModuleComponent, selectors: [["page-module"]], decls: 2, vars: 1, consts: [[1, "page-module"]], template: function PageModuleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1("page ", ctx.version, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageModuleComponent, [{
        type: Component,
        args: [{
                selector: 'page-module',
                template: `<span class="page-module">page {{version}}</span>`,
                styles: []
            }]
    }], function () { return []; }, null); })();

class PageComponent extends DisposableComponent {
    constructor(injector) {
        super();
        this.injector = injector;
        this.scrollToTop();
    }
    get platformId() {
        return this.injector.get(PLATFORM_ID);
    }
    get routeService() {
        return this.injector.get(RouteService);
    }
    get router() {
        return this.injector.get(Router);
    }
    // !!! Scroll to top on page change
    scrollToTop() {
        // !!! PLATFORM_ID dependancy manually activated
        // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
        if (isPlatformBrowser(this.platformId)) {
            // !!! Router dependancy manually activated
            // const router = RouteService.injector.get(Router);
            this.router.events.subscribe((e) => {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    }
    getId() {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    }
    getSlug() {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(ɵɵdirectiveInject(Injector)); };
PageComponent.ɵcmp = ɵɵdefineComponent({ type: PageComponent, selectors: [["core-page"]], inputs: { page: "page", params: "params", queryParams: "queryParams" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "page"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, "Page not found!");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageComponent, [{
        type: Component,
        args: [{
                selector: 'core-page',
                template: `<div class="page">Page not found!</div>`,
            }]
    }], function () { return [{ type: Injector }]; }, { page: [{
            type: Input
        }], params: [{
            type: Input
        }], queryParams: [{
            type: Input
        }] }); })();

class PageNotFoundComponent extends PageComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.url = this.router.url;
    }
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageNotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'page-not-found-component',
                template: `<div class="page">Page <span>{{url}}</span> not found</div>`,
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

class LinkDefinition {
}
class LinkService {
    constructor(doc) {
        this.doc = doc;
    }
    addTag(definition) {
        const element = this.doc.createElement(`link`);
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    }
    getTag(selector) {
        const element = this.doc.querySelector(`link${selector}`);
        return element;
    }
    updateTag(selector, definition) {
        const element = this.doc.querySelector(`link${selector}`);
        this.updateElementDefinition(element, definition);
    }
    removeTag(selector) {
        const element = this.doc.querySelector(`link${selector}`);
        element.remove();
    }
    updateElementDefinition(element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    }
    updateElementAttribute(element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    }
}
LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(ɵɵinject(DOCUMENT)); };
LinkService.ɵprov = ɵɵdefineInjectable({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LinkService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

class PageService extends EntityService {
    constructor(injector, titleService, metaService, linkService, statusCodeService) {
        super(injector);
        this.injector = injector;
        this.titleService = titleService;
        this.metaService = metaService;
        this.linkService = linkService;
        this.statusCodeService = statusCodeService;
        // console.log('PageService', options);
    }
    get collection() {
        return '/api/page';
    }
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
    getStatePageById(id) {
        return this.stateGet(`/${id}`).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(x => new Page(x)), catchError(error => {
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    getPageById(id) {
        return this.get(`/${id}`).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(x => new Page(x)), catchError(error => {
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
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
    addOrUpdateMetaData(page) {
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
    getSocialImage(page) {
        const image = page.images ? (page.images.find(i => i.type === ImageType.Share) ||
            page.images.find(i => i.type === ImageType.Default) ||
            page.images.find(i => i.type === ImageType.Gallery)) : null;
        return image || {
            url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
        };
    }
    addOrUpdateMeta(definition) {
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
    addOrUpdateLink(definition) {
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
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(ɵɵinject(Injector), ɵɵinject(Title), ɵɵinject(Meta), ɵɵinject(LinkService), ɵɵinject(HttpStatusCodeService)); };
PageService.ɵprov = ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }, { type: Title }, { type: Meta }, { type: LinkService }, { type: HttpStatusCodeService }]; }, null); })();

const _c0 = ["outlet"];
function PageOutletComponent_ng_template_0_Template(rf, ctx) { }
class PageOutletComponent extends DisposableComponent {
    constructor(router, route, componentFactoryResolver, routeService, pageService) {
        super();
        this.router = router;
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
        this.routeService = routeService;
        this.pageService = pageService;
        // !!! keep -> Avoid PageOutlet Route Caching for different routes
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        this.setSnapshot(this.route.snapshot);
    }
    setSnapshot(snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        const data = snapshot.data;
        const params = this.routeService.params;
        const queryParams = this.routeService.queryParams;
        let component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            const page = data.pageResolver.page;
            const factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            const componentRef = this.viewContainerRef.createComponent(factory);
            const instance = componentRef.instance;
            instance.page = page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            this.componentRef = componentRef;
            if (page) {
                const config = this.router.config.slice();
                const slug = page.slug;
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
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
PageOutletComponent.ɵfac = function PageOutletComponent_Factory(t) { return new (t || PageOutletComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(RouteService), ɵɵdirectiveInject(PageService)); };
PageOutletComponent.ɵcmp = ɵɵdefineComponent({ type: PageOutletComponent, selectors: [["page-outlet"]], viewQuery: function PageOutletComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["outlet", ""]], template: function PageOutletComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PageOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
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

class PageResolver {
    constructor(configService, page) {
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
}

class PageResolverService {
    constructor(configService, pageService, routeService) {
        this.configService = configService;
        this.pageService = pageService;
        this.routeService = routeService;
        this.events$ = new BehaviorSubject(null);
    }
    pageToPageResolver(page) {
        const pageResolver = new PageResolver(this.configService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    }
    resolve(route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            const paths = route.url.filter(x => {
                return x.path;
            }).map(x => {
                return x.path;
            });
            const slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    }
    getPageById(id) {
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(page => this.pageToPageResolver(page)));
    }
    getPageBySlug(slug) {
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(page => this.pageToPageResolver(page)));
    }
}
PageResolverService.ɵfac = function PageResolverService_Factory(t) { return new (t || PageResolverService)(ɵɵinject(ConfigService), ɵɵinject(PageService), ɵɵinject(RouteService)); };
PageResolverService.ɵprov = ɵɵdefineInjectable({ token: PageResolverService, factory: PageResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageResolverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ConfigService }, { type: PageService }, { type: RouteService }]; }, null); })();

class PageGuard {
    match(route) {
        const lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    }
    canActivate(route, state) {
        return this.match(route);
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    }
}
PageGuard.ɵfac = function PageGuard_Factory(t) { return new (t || PageGuard)(); };
PageGuard.ɵprov = ɵɵdefineInjectable({ token: PageGuard, factory: PageGuard.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageGuard, [{
        type: Injectable
    }], null, null); })();

class StaticGuard {
    match(route) {
        const lastPath = route.url[route.url.length - 1].path;
        // console.log('StaticGuard.CanActivate', e, lastPath);
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivate(route, state) {
        return this.match(route);
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    }
}
StaticGuard.ɵfac = function StaticGuard_Factory(t) { return new (t || StaticGuard)(); };
StaticGuard.ɵprov = ɵɵdefineInjectable({ token: StaticGuard, factory: StaticGuard.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StaticGuard, [{
        type: Injectable
    }], null, null); })();

const routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
class PageRouting {
}
PageRouting.ɵmod = ɵɵdefineNgModule({ type: PageRouting });
PageRouting.ɵinj = ɵɵdefineInjector({ factory: function PageRouting_Factory(t) { return new (t || PageRouting)(); }, imports: [[
            RouterModule.forChild(routes),
        ],
        RouterModule] });
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

const services = [
    ConfigService,
    PageService,
];
const components = [
    PageModuleComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
    LayoutComponent,
];
const directives = [
    UseLayoutDirective
];
const pipes = [];
const validators = [];
const guards = [
    PageGuard,
    StaticGuard,
];
class PageModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PageModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: PageModule,
            providers: [{
                    provide: PAGE_CONFIG, useValue: config
                }]
        };
    }
}
PageModule.ɵmod = ɵɵdefineNgModule({ type: PageModule });
PageModule.ɵinj = ɵɵdefineInjector({ factory: function PageModule_Factory(t) { return new (t || PageModule)(ɵɵinject(PageModule, 12)); }, providers: [
        ...services,
        ...guards,
    ], imports: [[
            CommonModule,
            CoreModule,
            PageRouting,
        ],
        CoreModule,
        PageRouting] });
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
                providers: [
                    ...services,
                    ...guards,
                ],
                declarations: [
                    ...components,
                    ...directives,
                ],
                entryComponents: [
                    ...components,
                ],
                exports: [
                    CoreModule,
                    PageRouting,
                    ...components,
                    ...directives,
                ],
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
