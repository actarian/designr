import { NgModule } from '@angular/core';
import { EditorLazyModule } from '@designr/editor';

@NgModule({
	imports: [
		EditorLazyModule,
	],
	exports: [EditorLazyModule]
})

export class EditorBundle { }
