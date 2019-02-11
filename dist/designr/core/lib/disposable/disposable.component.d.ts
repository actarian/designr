import { OnDestroy } from '@angular/core';
export declare class DisposableComponent implements OnDestroy {
    protected unsubscribe: any;
    ngOnDestroy(): void;
}
