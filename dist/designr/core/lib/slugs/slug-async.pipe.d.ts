import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { RoutePipe } from '../routes/route.pipe';
import { SlugService } from './slug.service';
export declare class SlugAsyncPipe implements OnDestroy, PipeTransform {
    private changeDetector;
    private slugService;
    private routePipe;
    private asyncPipe;
    constructor(changeDetector: ChangeDetectorRef, slugService: SlugService, routePipe: RoutePipe);
    transform(key: string, segments?: string[]): string[];
    ngOnDestroy(): void;
}
