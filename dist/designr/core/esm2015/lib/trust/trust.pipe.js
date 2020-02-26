import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class TrustPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(text) {
        return this.sanitizer.bypassSecurityTrustHtml(text);
        // return this.sanitizer.bypassSecurityTrustStyle(text);
        // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
    }
}
TrustPipe.ɵfac = function TrustPipe_Factory(t) { return new (t || TrustPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
TrustPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeHtml", type: TrustPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrustPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJ1c3QvdHJ1c3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUt6RCxNQUFNLE9BQU8sU0FBUztJQUVyQixZQUNTLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDNUIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCx3REFBd0Q7UUFDeEQsaUVBQWlFO0lBQ2xFLENBQUM7O2tFQVZXLFNBQVM7NERBQVQsU0FBUztrREFBVCxTQUFTO2NBSHJCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsVUFBVTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdzYWZlSHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVHJ1c3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCk7XG5cdFx0Ly8gcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh0ZXh0KTtcblx0XHQvLyByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFh4eCh0ZXh0KTsgLSBzZWUgZG9jc1xuXHR9XG59XG4iXX0=