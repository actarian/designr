export declare class HttpStatusCodeService {
    private statusCode;
    private redirectUrl;
    constructor();
    setStatusCode(statusCode: number, redirectUrl?: string): void;
    getStatusCode(): number;
    getRedirectUrl(): string;
}
