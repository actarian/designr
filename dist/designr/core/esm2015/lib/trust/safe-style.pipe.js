import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}
SafeStylePipe.ɵfac = function SafeStylePipe_Factory(t) { return new (t || SafeStylePipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
SafeStylePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeStyle", type: SafeStylePipe, pure: true });
SafeStylePipe.ɵprov = i0.ɵɵdefineInjectable({ token: SafeStylePipe, factory: SafeStylePipe.ɵfac, providedIn: 'root' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cnVzdC9zYWZlLXN0eWxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBU3pELE1BQU0sT0FBTyxhQUFhO0lBRXpCLFlBQ1MsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUM1QixDQUFDO0lBRUwsU0FBUyxDQUFDLEtBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OzBFQVJXLGFBQWE7aUVBQWIsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGYixNQUFNO2tEQUVOLGFBQWE7Y0FQekIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxXQUFXO2FBQ2pCOztjQUVBLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdzYWZlU3R5bGUnXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTYWZlU3R5bGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybShzdHlsZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XG5cdH1cbn1cbiJdfQ==