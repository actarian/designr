import { AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, ControlBaseOptions, FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { Page, PageResolverService, PageService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
export declare class EditorRootComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private pageService;
    private markdownService;
    private formService;
    private pageResolverService;
    private _pageCopy;
    private _page;
    controls: ControlBase<any>[];
    group: FormGroup;
    busy: boolean;
    submitted: boolean;
    constructor(platformId: string, pageService: PageService, markdownService: MarkdownService, formService: FormService, pageResolverService: PageResolverService);
    page: Page;
    readonly componentName: string;
    getControlsByPage(page: Page): ControlBaseOptions<any>[];
    ngAfterViewInit(): void;
    onReset(): void;
    onSubmit(model: any): void;
    onAssign(model: any): void;
}
