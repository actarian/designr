import { NgModule } from '@angular/core';
import { CoreModule } from '@designr/core';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		CoreModule.forRoot(environment.core),
	],
	exports: [CoreModule]
})

export class AppCore { }
