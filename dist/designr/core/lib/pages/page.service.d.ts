import { Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpStatusCodeService } from '../http/http-status-code.service';
import { EntityService } from '../models/entity.service';
import { LinkService } from './link.service';
import { Page } from './page';
export declare class PageService extends EntityService<Page> {
    protected injector: Injector;
    private titleService;
    private metaService;
    private linkService;
    private statusCodeService;
    readonly collection: string;
    constructor(injector: Injector, titleService: Title, metaService: Meta, linkService: LinkService, statusCodeService: HttpStatusCodeService);
    getStatePageBySlug(slug: string): Observable<Page>;
    getStatePageById(id: number | string): Observable<Page>;
    getPageById(id: number | string): Observable<Page>;
    getPageBySlug(slug: string): Observable<Page>;
    addOrUpdateMetaData(page: Page): void;
    private getSocialImage;
    private addOrUpdateMeta;
    private addOrUpdateLink;
}
