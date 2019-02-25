import { NgModule } from '@angular/core';
import { CoreModule, CoreModules } from '@designr/core';
import { environment } from '../environments/environment';

export const modules: CoreModules = {
	editorLazyModule: 'projects/client/src/app/app.editor-lazy#AppEditorLazy',
};

@NgModule({
	imports: [
		CoreModule.forRoot(environment.core, modules),
	],
	exports: [CoreModule]
})

export class AppCore { }
