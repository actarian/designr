import { NgModule } from '@angular/core';
import { EditorBundleModule } from '@designr/editor';

@NgModule({
	imports: [
		EditorBundleModule,
	],
	exports: [EditorBundleModule]
})

export class EditorBundle { }
