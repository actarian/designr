import { Component, ComponentFactory, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DisposableComponent } from '../disposable/disposable.component';
import { RouteService } from '../routes/route.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';
import { PageService } from './page.service';

@Component({
	selector: 'page-outlet',
	template: '',
})

export class PageOutletComponent extends DisposableComponent {

	private factory: ComponentFactory<PageComponent>;

	constructor(
		@Inject(ViewContainerRef) private viewContainerRef: ViewContainerRef,
		private router: Router,
		private route: ActivatedRoute,
		private componentFactoryResolver: ComponentFactoryResolver,
		private routeService: RouteService,
		private pageService: PageService,
	) {
		super();
		// !!! keep -> Avoid PageOutlet Route Caching for different routes
		this.router.routeReuseStrategy.shouldReuseRoute = () => {
			return false;
		};
		this.setSnapshot(this.route.snapshot);
	}

	setSnapshot(snapshot: ActivatedRouteSnapshot): void {
		this.routeService.params = this.routeService.toData(snapshot.params);
		this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
		const data = snapshot.data;
		const params = this.routeService.params;
		const queryParams = this.routeService.queryParams;
		let component: any = PageNotFoundComponent;
		if (data.pageResolver) {
			component = data.pageResolver.component;
			this.routeService.page = data.pageResolver.page;
			const factory: ComponentFactory<PageComponent> = this.componentFactoryResolver.resolveComponentFactory(component);
			this.factory = factory;
			this.viewContainerRef.clear();
			const componentRef = this.viewContainerRef.createComponent(this.factory);
			const instance = componentRef.instance;
			instance.page = data.pageResolver.page;
			instance.params = params;
			instance.queryParams = queryParams;
			if (typeof instance['PageInit'] === 'function') {
				instance['PageInit']();
			}
			if (data.pageResolver.page) {
				const config = this.router.config.slice();
				const slug = data.pageResolver.page.slug;
				if (slug) {
					config.push({
						path: slug.indexOf('/') === 0 ? slug.substr(1) : slug, component: data.pageResolver.component,
					});
					this.router.resetConfig(config);
				}
				this.pageService.addOrUpdateMetaData(this.routeService.page);
			}
		}/* else {
			// console.log('PageOutletComponent.setSnapshot 404', data);
		}*/
	}

}
