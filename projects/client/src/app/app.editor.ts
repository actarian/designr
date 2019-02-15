import { NgModule } from '@angular/core';
import { EditorModule } from '@designr/editor';

@NgModule({
	imports: [
		EditorModule.forRoot({ enabled: true }),
	],
	exports: [EditorModule]
})

export class AppEditor { }
