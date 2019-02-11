import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const ROUTES: Routes = [{
	path: 'not-found', component: NotFoundComponent
}];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES, {
			initialNavigation: 'enabled',
			enableTracing: false,
			useHash: true,
		} // environment.routing
		)
	],
	exports: [RouterModule]
})

export class AppRouting { }

