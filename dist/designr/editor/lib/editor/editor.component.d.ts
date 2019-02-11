import { AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigService, ControlBase, ControlBaseOptions, DisposableComponent, FormService, Page, PageResolverService } from '@designr/core';
import { MarkdownService } from 'ngx-markdown';
export declare class EditorComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private configService;
    private markdownService;
    private formService;
    private pageResolverService;
    private _pageCopy;
    private _page;
    controls: ControlBase<any>[];
    group: FormGroup;
    editing: boolean;
    busy: boolean;
    submitted: boolean;
    constructor(platformId: string, configService: ConfigService, markdownService: MarkdownService, formService: FormService, pageResolverService: PageResolverService);
    page: Page;
    readonly componentName: string;
    getControlsByPage(page: Page): ControlBaseOptions<any>[];
    ngAfterViewInit(): void;
    onKeydown(e: KeyboardEvent): void;
    onReset(): void;
    onSubmit(model: any): void;
    onAssign(model: any): void;
}
