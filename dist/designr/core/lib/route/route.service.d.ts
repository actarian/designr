import { Location } from '@angular/common';
import { Injector } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from '../pipes/segment.pipe';
import { TranslateService } from '../translate/translate.service';
export declare class RouteService {
    private platformId;
    private coreService;
    private injector;
    private translateService;
    private location;
    private route;
    private router;
    private segment;
    static startTime: number;
    static endTime: number;
    private urlStrategy;
    private _language;
    readonly language: Observable<any>;
    private _languages;
    readonly languages: Observable<any[]>;
    private _lang;
    private path;
    params: Observable<Params>;
    queryParams: Observable<Params>;
    currentMarket: string;
    constructor(platformId: string, coreService: CoreService, injector: Injector, translateService: TranslateService, location: Location, route: ActivatedRoute, router: Router, segment: SegmentPipe);
    private lang;
    readonly currentLang: string;
    pageParams$: BehaviorSubject<Params>;
    getPageParams(): Observable<Params>;
    parseParams(params: any): any;
    serializeParams(params: any): {};
    parse(base64: any): any;
    serialize(object: any): any;
    getId(): number;
    getSlug(): string;
    toRoute(data: any[] | string): any[];
    toSlug(data: any[] | string): any[];
    toParams(data: any): any;
    toData(params: any): any;
    setLanguage(lang: string, silent?: boolean): void;
    private setLanguages;
    private subscribeToRouter;
    private detectLanguage;
    getTime(): number;
    start(): void;
    end(): void;
}