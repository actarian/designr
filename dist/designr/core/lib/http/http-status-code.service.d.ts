import * as i0 from "@angular/core";
export declare class HttpStatusCodeService {
    private statusCode;
    private redirectUrl;
    constructor();
    setStatusCode(statusCode: number, redirectUrl?: string): void;
    getStatusCode(): number;
    getRedirectUrl(): string;
    static ɵfac: i0.ɵɵFactoryDef<HttpStatusCodeService>;
    static ɵprov: i0.ɵɵInjectableDef<HttpStatusCodeService>;
}
