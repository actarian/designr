import { Observable } from 'rxjs';
import { Entity } from './entity';
import { IdentityService } from './identity.service';
export declare class EntityService<T extends Entity> extends IdentityService<T> {
    readonly collection: string;
    getDetailByName(name: string): Observable<T[]>;
}
