import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const ROUTES: Routes = [{
	path: 'not-found', component: NotFoundComponent
}];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES, environment.core.routing as ExtraOptions)
	],
	exports: [RouterModule]
})

export class AppRouting { }

