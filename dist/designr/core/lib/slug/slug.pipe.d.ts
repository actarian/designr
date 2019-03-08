import { PipeTransform } from '@angular/core';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';
export declare class SlugPipe implements PipeTransform {
    private slugService;
    private routePipe;
    constructor(slugService: SlugService, routePipe: RoutePipe);
    transform(key: string, segments?: string[]): string[];
}
