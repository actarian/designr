import { Directive } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DisposableDirective {
    constructor() {
        this.unsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableDirective.ngOnDestroy', this);
    }
}
DisposableDirective.ɵfac = function DisposableDirective_Factory(t) { return new (t || DisposableDirective)(); };
DisposableDirective.ɵdir = i0.ɵɵdefineDirective({ type: DisposableDirective, selectors: [["", "disposable-directive", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DisposableDirective, [{
        type: Directive,
        args: [{
                selector: '[disposable-directive]'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBS1csZ0JBQVcsR0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBUTNDO0lBTkEsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1Qix3REFBd0Q7SUFDekQsQ0FBQzs7c0ZBUlcsbUJBQW1CO3dEQUFuQixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2Rpc3Bvc2FibGUtZGlyZWN0aXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgRGlzcG9zYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlOiBhbnkgPSBuZXcgU3ViamVjdCgpO1xuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcblx0XHQvLyBjb25zb2xlLmxvZygnRGlzcG9zYWJsZURpcmVjdGl2ZS5uZ09uRGVzdHJveScsIHRoaXMpO1xuXHR9XG5cbn1cbiJdfQ==