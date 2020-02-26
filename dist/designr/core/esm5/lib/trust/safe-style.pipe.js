import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var SafeStylePipe = /** @class */ (function () {
    function SafeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStylePipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    SafeStylePipe.ɵfac = function SafeStylePipe_Factory(t) { return new (t || SafeStylePipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    SafeStylePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeStyle", type: SafeStylePipe, pure: true });
    SafeStylePipe.ɵprov = i0.ɵɵdefineInjectable({ token: SafeStylePipe, factory: SafeStylePipe.ɵfac, providedIn: 'root' });
    return SafeStylePipe;
}());
export { SafeStylePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SafeStylePipe, [{
        type: Pipe,
        args: [{
                name: 'safeStyle'
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cnVzdC9zYWZlLXN0eWxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRXpEO0lBU0MsdUJBQ1MsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUM1QixDQUFDO0lBRUwsaUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OEVBUlcsYUFBYTtxRUFBYixhQUFhO3lEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07d0JBUm5CO0NBbUJDLEFBaEJELElBZ0JDO1NBVFksYUFBYTtrREFBYixhQUFhO2NBUHpCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsV0FBVzthQUNqQjs7Y0FFQSxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnc2FmZVN0eWxlJ1xufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2FmZVN0eWxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oc3R5bGU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xuXHR9XG59XG4iXX0=