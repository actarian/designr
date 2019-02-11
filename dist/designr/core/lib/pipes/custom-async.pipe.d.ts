import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
export declare class CustomAsyncPipe implements OnDestroy, PipeTransform {
    private changeDetector;
    private subject;
    private subscription;
    private value;
    private cachedValue;
    constructor(changeDetector: ChangeDetectorRef);
    transform(subject: Observable<any> | null | undefined): any;
    private observableToValue;
    dispose(): void;
    ngOnDestroy(): void;
    private _observableToValue;
}
