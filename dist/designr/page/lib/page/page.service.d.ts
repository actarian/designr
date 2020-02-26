import { Injector } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { EntityService, HttpStatusCodeService, Image } from '@designr/core';
import { Observable } from 'rxjs';
import { LinkDefinition, LinkService } from './link.service';
import { Page } from './page';
import * as i0 from "@angular/core";
export declare class PageService extends EntityService<Page> {
    protected injector: Injector;
    private titleService;
    private metaService;
    private linkService;
    private statusCodeService;
    page: Page;
    get collection(): string;
    constructor(injector: Injector, titleService: Title, metaService: Meta, linkService: LinkService, statusCodeService: HttpStatusCodeService);
    getStatePageBySlug(slug: string): Observable<Page>;
    getStatePageById(id: number | string): Observable<Page>;
    getPageById(id: number | string): Observable<Page>;
    getPageBySlug(slug: string): Observable<Page>;
    addOrUpdateMetaData(page: Page): void;
    getSocialImage(page: Page): Image;
    addOrUpdateMeta(definition: MetaDefinition): void;
    addOrUpdateLink(definition: LinkDefinition): void;
    static ɵfac: i0.ɵɵFactoryDef<PageService>;
    static ɵprov: i0.ɵɵInjectableDef<PageService>;
}
