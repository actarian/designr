import { PipeTransform } from '@angular/core';
import { RouteService } from './route.service';
import * as i0 from "@angular/core";
export declare class RoutePipe implements PipeTransform {
    private routeService;
    constructor(routeService: RouteService);
    transform(data: any[] | string): string[];
    static ɵfac: i0.ɵɵFactoryDef<RoutePipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<RoutePipe, "route">;
    static ɵprov: i0.ɵɵInjectableDef<RoutePipe>;
}
