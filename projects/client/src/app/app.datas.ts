import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@designr/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { label } from './data/label';
import { MemoryService, MEMORY_DATA } from './data/memory.service';
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
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			MemoryService, environment.memoryApi
		),
	],
	providers: [{
		provide: MEMORY_DATA, useValue: DATA
	}],
	exports: [HttpClientInMemoryWebApiModule]
})

export class AppDatas { }
