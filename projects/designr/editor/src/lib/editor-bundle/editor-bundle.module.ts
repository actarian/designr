import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '@designr/control';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorRootComponent } from './editor-root.component';

const services = [
];

const components = [
	EditorRootComponent,
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
		{ provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent },
		...services,
	],
	declarations: [
		EditorRootComponent,
		...components,
	],
	entryComponents: [
		EditorRootComponent,
	],
	exports: [
		...components,
	],
})

export class EditorBundleModule {

	constructor(
		@Optional() @SkipSelf() parentModule: EditorBundleModule
	) {
		if (parentModule) {
			throw new Error('EditorBundleModule is already loaded. Import it in the AppModule only');
		}
	}

}
