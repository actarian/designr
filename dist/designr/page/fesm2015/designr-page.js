import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { DisposableComponent, RouteService, EntityService, HttpStatusCodeService, ImageType, CoreModule } from '@designr/core';
import { of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { InjectionToken, Component, Injector, Input, PLATFORM_ID, ViewEncapsulation, Inject, Injectable, NgModule, ComponentFactoryResolver, ViewChild, ViewContainerRef, defineInjectable, inject, Optional, SkipSelf, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.pages = {};
        // console.log('PageConfig', options);
        if (options) {
            this.pages = options.pages || {};
            this.defaultPage = options.defaultPage;
            this.notFoundPage = options.notFoundPage;
        }
    }
}
/** @type {?} */
const PAGE_CONFIG = new InjectionToken('page.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageModuleComponent {
    constructor() {
        this.version = '0.0.3';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PageModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-module',
                template: `<span class="page-module">page {{version}}</span>`
            }] }
];
/** @nocollapse */
PageModuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageMeta {
}
class PageIndex {
    /**
     * @param {?=} options
     */
    constructor(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
}
class PageRelation {
}
class Page {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                /** @type {?} */
                const related = options.related.map((x) => {
                    // const item = new PageIndex(x.page);
                    /** @type {?} */
                    const item = new PageIndex(x);
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
    getFeature(id) {
        return this.features.find(x => x.id === id) || null;
    }
    /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    getFeatures(type, n) {
        return this.features ? this.features.filter((x, i) => (n.indexOf(Number(x.id)) !== -1 && x.type === type)).sort((a, b) => a.type - b.type) : [];
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getFeaturesByTypes(type) {
        return this.features ? this.features.filter((x) => (type.indexOf(Number(x.type)) !== -1)) : [];
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getGroupedFeaturesByTypes(type) {
        /** @type {?} */
        const groups = {};
        type.forEach(type => {
            /** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageComponent extends DisposableComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super();
        this.injector = injector;
        this.scrollToTop();
    }
    /**
     * @return {?}
     */
    get platformId() {
        return (/** @type {?} */ (this.injector.get(PLATFORM_ID)));
    }
    /**
     * @return {?}
     */
    get routeService() {
        return this.injector.get(RouteService);
    }
    /**
     * @return {?}
     */
    get router() {
        return this.injector.get(Router);
    }
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    getId() {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    }
    /**
     * @return {?}
     */
    getSlug() {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    }
}
PageComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-page',
                template: `<div class="page">Page not found!</div>`
            }] }
];
/** @nocollapse */
PageComponent.ctorParameters = () => [
    { type: Injector }
];
PageComponent.propDecorators = {
    page: [{ type: Input }],
    params: [{ type: Input }],
    queryParams: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageNotFoundComponent extends PageComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.url = this.router.url;
    }
}
PageNotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-not-found-component',
                template: `<div class="page">Page <span>{{url}}</span> not found</div>`,
                encapsulation: ViewEncapsulation.Emulated
            }] }
];
/** @nocollapse */
PageNotFoundComponent.ctorParameters = () => [
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * @param {?} definition
     * @return {?}
     */
    addTag(definition) {
        /** @type {?} */
        const element = this.doc.createElement(`link`);
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    getTag(selector) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        return element;
    }
    /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    updateTag(selector, definition) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        this.updateElementDefinition(element, definition);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    removeTag(selector) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        element.remove();
    }
    /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    updateElementDefinition(element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    }
    /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    updateElementAttribute(element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    }
}
LinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LinkService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ LinkService.ngInjectableDef = defineInjectable({ factory: function LinkService_Factory() { return new LinkService(inject(DOCUMENT)); }, token: LinkService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageService extends EntityService {
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
        // console.log('PageService', options);
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
        this.titleService.setTitle(page.title);
        this.addOrUpdateMeta({ property: 'og:title', content: page.title });
        this.addOrUpdateMeta({ property: 'og:image', content: this.getSocialImage(page).url });
        this.addOrUpdateMeta({ property: 'og:image:width', content: '1200' });
        this.addOrUpdateMeta({ property: 'og:image:height', content: '630' });
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
/** @nocollapse */ PageService.ngInjectableDef = defineInjectable({ factory: function PageService_Factory() { return new PageService(inject(PAGE_CONFIG), inject(INJECTOR), inject(Title), inject(Meta), inject(LinkService), inject(HttpStatusCodeService)); }, token: PageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageOutletComponent extends DisposableComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} componentFactoryResolver
     * @param {?} routeService
     * @param {?} pageService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setSnapshot(this.route.snapshot);
    }
    /**
     * @param {?} snapshot
     * @return {?}
     */
    setSnapshot(snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        /** @type {?} */
        const data = snapshot.data;
        /** @type {?} */
        const params = this.routeService.params;
        /** @type {?} */
        const queryParams = this.routeService.queryParams;
        /** @type {?} */
        let component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            /** @type {?} */
            const page = data.pageResolver.page;
            /** @type {?} */
            const factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            /** @type {?} */
            const componentRef = this.viewContainerRef.createComponent(factory);
            /** @type {?} */
            const instance = componentRef.instance;
            instance.page = page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            this.componentRef = componentRef;
            if (page) {
                /** @type {?} */
                const config = this.router.config.slice();
                /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
PageOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-outlet',
                template: '<ng-template #outlet></ng-template>'
            }] }
];
/** @nocollapse */
PageOutletComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ComponentFactoryResolver },
    { type: RouteService },
    { type: PageService }
];
PageOutletComponent.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageResolver {
    /**
     * @param {?} pageService
     * @param {?} page
     */
    constructor(pageService, page) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageResolverService {
    /**
     * @param {?} pageService
     * @param {?} routeService
     */
    constructor(pageService, routeService) {
        this.pageService = pageService;
        this.routeService = routeService;
        this.events$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageToPageResolver(page) {
        /** @type {?} */
        const pageResolver = new PageResolver(this.pageService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    resolve(route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            /** @type {?} */
            const paths = route.url.filter(x => {
                return x.path;
            }).map(x => {
                return x.path;
            });
            /** @type {?} */
            const slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getPageById(id) {
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(page => this.pageToPageResolver(page)));
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getPageBySlug(slug) {
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(page => this.pageToPageResolver(page)));
    }
}
PageResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PageResolverService.ctorParameters = () => [
    { type: PageService },
    { type: RouteService }
];
/** @nocollapse */ PageResolverService.ngInjectableDef = defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(inject(PageService), inject(RouteService)); }, token: PageResolverService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageGuard {
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    match(route) {
        /** @type {?} */
        const lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        /** @type {?} */
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        /** @type {?} */
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.match(route);
    }
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    canDeactivate(component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    }
}
PageGuard.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StaticGuard {
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    match(route) {
        /** @type {?} */
        const lastPath = route.url[route.url.length - 1].path;
        // console.log('StaticGuard.CanActivate', e, lastPath);
        /** @type {?} */
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        /** @type {?} */
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.match(route);
    }
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    canDeactivate(component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    }
}
StaticGuard.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
class PageRouting {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    PageService,
];
/** @type {?} */
const components = [
    PageModuleComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
];
/** @type {?} */
const guards = [
    PageGuard,
    StaticGuard,
];
class PageModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PageModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: PageModule,
            providers: [{
                    provide: PAGE_CONFIG, useValue: config
                }]
        };
    }
}
PageModule.decorators = [
    { type: NgModule, args: [{
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
                ],
                entryComponents: [
                    ...components,
                ],
                exports: [
                    CoreModule,
                    PageRouting,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
PageModule.ctorParameters = () => [
    { type: PageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PageConfig, PAGE_CONFIG, PageModuleComponent, PageModule, PageRouting, Page, PageIndex, PageMeta, PageRelation, PageNotFoundComponent, PageOutletComponent, PageResolver, PageResolverService, PageComponent, PageGuard, PageService, StaticGuard, LinkService as ɵa };

//# sourceMappingURL=designr-page.js.map