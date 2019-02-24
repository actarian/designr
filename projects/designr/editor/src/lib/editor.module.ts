import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '@designr/control';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorConfig, EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { EditorModuleComponent } from './editor-module.component';
import { EditorComponent } from './editor/editor.component';

const services = [
	EditorService,
];

const components = [
	EditorModuleComponent,
	EditorComponent,
];

const directives = [
];

const pipes = [
];

const validators = [
];

const guards = [
];

@NgModule({
	imports: [
		CommonModule,
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
		ControlModule,
	],
	providers: [
		...services,
	],
	declarations: [
		...components,
	],
	exports: [
		CoreModule,
		...components,
	],
})

export class EditorModule {

	constructor(
		@Optional() @SkipSelf() parentModule: EditorModule
	) {
		if (parentModule) {
			throw new Error('EditorModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(
		config?: EditorConfig,
	): ModuleWithProviders {
		return {
			ngModule: EditorModule,
			providers: [
				{ provide: EDITOR_CONFIG, useValue: config },
			]
		};
	}

}
