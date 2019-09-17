import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlOption, FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { ConfigService, Page, PageResolverService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
export declare class EditorRootComponent extends DisposableComponent implements OnInit {
    private platformId;
    private configService;
    private markdownService;
    private formService;
    private pageResolverService;
    private _pageCopy;
    private _page;
    options: ControlOption<any>[];
    form: FormGroup;
    busy: boolean;
    submitted: boolean;
    constructor(platformId: string, configService: ConfigService, markdownService: MarkdownService, formService: FormService, pageResolverService: PageResolverService);
    page: Page;
    readonly componentName: string;
    getControlsByPage(page: Page): ControlOption<any>[];
    ngOnInit(): void;
    onReset(): void;
    onSubmit(model: any): void;
    onAssign(model: any): void;
}
