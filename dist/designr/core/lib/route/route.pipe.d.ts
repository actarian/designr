import { PipeTransform } from '@angular/core';
import { RouteService } from './route.service';
export declare class RoutePipe implements PipeTransform {
    private routeService;
    constructor(routeService: RouteService);
    transform(data: any[] | string): string[];
}
