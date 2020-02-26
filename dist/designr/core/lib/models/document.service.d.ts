import { Observable } from 'rxjs';
import { Document } from './document';
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
export declare class DocumentService<T extends Document> extends EntityService<T> {
    get collection(): string;
    getDetailBySlug(slug: string): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDef<DocumentService<any>>;
    static ɵprov: i0.ɵɵInjectableDef<DocumentService<any>>;
}
