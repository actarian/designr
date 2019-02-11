import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorModuleComponent } from './editor-module.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MarkdownModule.forRoot({
			markedOptions: {
				provide: MarkedOptions,
				useValue: {
					// gfm: true,
					// tables: true,
					// breaks: true,
					// pedantic: true,
					// sanitize: true,
					// smartLists: true,
					// smartypants: true,
				},
			},
		}),
		CoreModule,
	],
	declarations: [
		EditorModuleComponent,
		EditorComponent,
	],
	exports: [
		EditorModuleComponent,
		EditorComponent,
	],
	providers: [],
})

export class EditorModule {

	constructor(
		@Optional() @SkipSelf() parentModule: EditorModule
	) {
		if (parentModule) {
			throw new Error('EditorModule is already loaded. Import it in the AppModule only');
		}
	}

}
