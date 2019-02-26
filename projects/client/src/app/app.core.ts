import { NgModule } from '@angular/core';
import { Bundles, CoreModule } from '@designr/core';
import { environment } from '../environments/environment';

export const bundles: Bundles = {
	editor: 'projects/client/src/app/bundles/editor.bundle#EditorBundle',
};

@NgModule({
	imports: [
		CoreModule.forRoot(
			bundles,
			environment.core,
		),
	],
	exports: [CoreModule]
})

export class AppCore { }
