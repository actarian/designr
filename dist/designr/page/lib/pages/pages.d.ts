import { Type } from '@angular/core';
import { PageComponent } from './page.component';
export interface Pages {
    [key: string]: Type<PageComponent>;
}
