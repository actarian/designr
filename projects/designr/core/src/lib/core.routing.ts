import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { PageOutletComponent } from './pages/page-outlet.component';
import { PageResolverService } from './pages/page-resolver.service';
import { PageGuard } from './pages/page.guard';
import { StaticGuard } from './pages/static.guard';

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

export class CoreRouting { }
