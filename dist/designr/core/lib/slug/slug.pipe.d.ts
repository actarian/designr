import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { SlugService } from './slug.service';
export declare class SlugPipe implements PipeTransform {
    private slugService;
    constructor(slugService: SlugService);
    transform(key: string): Observable<string[]>;
}
