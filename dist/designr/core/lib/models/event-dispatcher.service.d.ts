import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EventEntity {
    type: string | number;
    data?: any;
}
export declare class EventDispatcherService {
    private emitter;
    constructor();
    emit(event: EventEntity): void;
    observe(): Observable<EventEntity>;
    static ɵfac: i0.ɵɵFactoryDef<EventDispatcherService>;
    static ɵprov: i0.ɵɵInjectableDef<EventDispatcherService>;
}
