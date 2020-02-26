import { Observable } from 'rxjs';
import { Entity } from './entity';
import { IdentityService } from './identity.service';
import * as i0 from "@angular/core";
export declare class EntityService<T extends Entity> extends IdentityService<T> {
    get collection(): string;
    getDetailByName(name: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<EntityService<any>>;
    static ɵprov: i0.ɵɵInjectableDef<EntityService<any>>;
}
