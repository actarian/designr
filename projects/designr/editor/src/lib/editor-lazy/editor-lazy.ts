import { InjectionToken } from '@angular/core';

export type Modules = {
	editorLazyModule: string;
};

export const LAZY_MODULES: Modules = {
	editorLazyModule: 'src/lib/editor-lazy/editor-lazy.module#EditorLazyModule'
};

export const EDITOR_MODULES_FACTORY = new InjectionToken('EDITOR_MODULES_FACTORY', {
	factory: () => LAZY_MODULES
});
