import { NgModule } from '@designr/core';
import { DataModule } from '@designr/data';
import { environment } from '../environments/environment';
import { label } from './data/label';
import { menu } from './data/menu';
import { page } from './data/page';
import { slug } from './data/slug';

export const DATA: { [key: string]: any[] } = {
	label: label,
	menu: menu,
	page: page,
	slug: slug,
};

@NgModule({
	imports: [
		DataModule.forRoot({
			datas: DATA,
			memory: environment.memory
		}),
	],
	exports: [DataModule]
})

export class AppDatas { }
