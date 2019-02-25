import { NgModule } from '@angular/core';
import { EditorModule } from '@designr/editor';

@NgModule({
	imports: [
		EditorModule,
	],
	exports: [EditorModule]
})

export class AppEditorLazy { }
