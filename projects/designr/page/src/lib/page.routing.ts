import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page/page-not-found.component';
import { PageOutletComponent } from './page/page-outlet.component';
import { PageResolverService } from './page/page-resolver.service';
import { PageGuard } from './page/page.guard';
import { StaticGuard } from './page/static.guard';

const routes: Routes = [
	{ path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
	{ path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
	{ path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [
		RouterModule,
	],
})

export class PageRouting { }
