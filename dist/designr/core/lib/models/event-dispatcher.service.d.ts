import { Observable } from 'rxjs';
export declare class EventEntity {
    type: string | number;
    data?: any;
}
export declare class EventDispatcherService {
    private emitter;
    constructor();
    emit(event: EventEntity): void;
    observe(): Observable<EventEntity>;
}
