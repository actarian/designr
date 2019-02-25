import { NgModule } from '@angular/core';
import { CoreModule, CoreModules } from '@designr/core';
import { environment } from '../environments/environment';

export const bundles: CoreModules = {
	editorLazyModule: 'projects/client/src/app/bundles/editor.bundle#EditorBundle',
};

@NgModule({
	imports: [
		CoreModule.forRoot(
			environment.core,
			bundles
		),
	],
	exports: [CoreModule]
})

export class AppCore { }
