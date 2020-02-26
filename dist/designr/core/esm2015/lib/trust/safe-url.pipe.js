import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
SafeUrlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeUrl", type: SafeUrlPipe, pure: true });
SafeUrlPipe.ɵprov = i0.ɵɵdefineInjectable({ token: SafeUrlPipe, factory: SafeUrlPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SafeUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeUrl'
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS11cmwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJ1c3Qvc2FmZS11cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFTekQsTUFBTSxPQUFPLFdBQVc7SUFFdkIsWUFDUyxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzVCLENBQUM7SUFFTCxTQUFTLENBQUMsR0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7c0VBUlcsV0FBVzs2REFBWCxXQUFXO21EQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07a0RBRU4sV0FBVztjQVB2QixJQUFJO2VBQUM7Z0JBQ0wsSUFBSSxFQUFFLFNBQVM7YUFDZjs7Y0FFQSxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnc2FmZVVybCdcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybSh1cmw6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodXJsKTtcblx0fVxufVxuIl19