import { Observable } from 'rxjs';
import { DocumentIndex } from '../models/document';
import { EntityService } from '../models/entity.service';
export declare class SlugService extends EntityService<DocumentIndex> {
    private collectedKeys;
    private cache;
    private slugs$;
    private emitter;
    readonly collection: string;
    getKey(key: string): Observable<string[]>;
    register(): Observable<any>;
    collect(): void;
    private getSlugs;
    private collectKeys;
}
