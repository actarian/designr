import { NgModule } from '@designr/core';
import { PluginsModule } from '@designr/plugins';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		PluginsModule.forRoot(environment.plugins),
	],
	exports: [PluginsModule]
})

export class AppPlugins { }
