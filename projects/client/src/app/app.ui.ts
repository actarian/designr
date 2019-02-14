import { NgModule } from '@designr/core';
import { UIModule } from '@designr/ui';

@NgModule({
	imports: [
		UIModule.forRoot({}),
	],
	exports: [UIModule]
})

export class AppUI { }
