import { NgModule } from '@designr/core';
import { PluginsModule } from '@designr/plugins';

@NgModule({
	imports: [
		PluginsModule,
	],
	exports: [PluginsModule]
})

export class AppPlugins { }
