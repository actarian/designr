import { Observable } from 'rxjs';
import { Document } from './document';
import { EntityService } from './entity.service';
export declare class DocumentService<T extends Document> extends EntityService<T> {
    readonly collection: string;
    getDetailBySlug(slug: string): Observable<T>;
}
