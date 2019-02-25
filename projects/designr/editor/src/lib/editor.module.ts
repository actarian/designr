import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { EditorConfig, EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { EditorModuleComponent } from './editor-module.component';
import { PanelComponent } from './panel/panel.component';

const services = [
	EditorService,
];

const components = [
	EditorModuleComponent,
	PanelComponent,
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
		CoreModule,
	],
	providers: [
		...services,
	],
	declarations: [
		...components,
		...directives,
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
