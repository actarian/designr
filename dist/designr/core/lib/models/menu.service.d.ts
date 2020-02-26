import { Injector } from '@angular/core';
import { EntityService } from './entity.service';
import { MenuItem } from './menu-item';
import * as i0 from "@angular/core";
export declare class MenuService extends EntityService<MenuItem> {
    protected injector: Injector;
    get collection(): string;
    constructor(injector: Injector);
    static ɵfac: i0.ɵɵFactoryDef<MenuService>;
    static ɵprov: i0.ɵɵInjectableDef<MenuService>;
}
