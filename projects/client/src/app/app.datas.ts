import { NgModule } from '@angular/core';
import { DataModule } from '@designr/data';
import { environment } from '../environments/environment';
import { label } from './data/label';
import { menu } from './data/menu';
import { page } from './data/page';
import { slug } from './data/slug';
import { translate } from './data/translate';
import { user } from './data/user';

export const DATA: { [key: string]: any[] } = {
	label,
	menu,
	page,
	slug,
	translate,
	user,
};

@NgModule({
	imports: [
		DataModule.forRoot({
			datas: DATA,
			memory: environment.data.memory,
		}),
	],
	exports: [DataModule]
})

export class AppDatas { }
