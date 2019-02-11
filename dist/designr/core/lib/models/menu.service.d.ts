import { Injector } from '@angular/core';
import { EntityService } from './entity.service';
import { MenuItem } from './menu-item';
export declare class MenuService extends EntityService<MenuItem> {
    protected injector: Injector;
    readonly collection: string;
    constructor(injector: Injector);
}
