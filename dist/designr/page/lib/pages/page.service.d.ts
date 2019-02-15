import { Injector } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { EntityService, HttpStatusCodeService, Image } from '@designr/core';
import { Observable } from 'rxjs';
import { PageConfig } from '../config/page.config';
import { LinkDefinition, LinkService } from './link.service';
import { Page } from './page';
export declare class PageService extends EntityService<Page> {
    protected injector: Injector;
    private titleService;
    private metaService;
    private linkService;
    private statusCodeService;
    options: PageConfig;
    page: Page;
    readonly collection: string;
    constructor(options: PageConfig, injector: Injector, titleService: Title, metaService: Meta, linkService: LinkService, statusCodeService: HttpStatusCodeService);
    getStatePageBySlug(slug: string): Observable<Page>;
    getStatePageById(id: number | string): Observable<Page>;
    getPageById(id: number | string): Observable<Page>;
    getPageBySlug(slug: string): Observable<Page>;
    addOrUpdateMetaData(page: Page): void;
    getSocialImage(page: Page): Image;
    addOrUpdateMeta(definition: MetaDefinition): void;
    addOrUpdateLink(definition: LinkDefinition): void;
}
