import { NgModule } from '@designr/core';
import { EditorModule } from '@designr/editor';

@NgModule({
	imports: [
		EditorModule,
	],
	exports: [EditorModule]
})

export class AppEditor { }
