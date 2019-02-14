import { Type } from '@angular/core';
import { PageComponent } from './page.component';

export interface Pages { [key: string]: Type<PageComponent>; }
// export interface Pages { [key: string]: { new(injector: Injector): PageComponent }; }

/*
export class Pages {
}
*/
