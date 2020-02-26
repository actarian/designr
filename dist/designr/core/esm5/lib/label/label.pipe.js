import { Injectable, Pipe } from '@angular/core';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
var LabelPipe = /** @class */ (function () {
    function LabelPipe(labelService) {
        this.labelService = labelService;
    }
    LabelPipe.prototype.transform = function (key, defaultValue, params) {
        return this.labelService.transform(key, defaultValue, params);
    };
    LabelPipe.ɵfac = function LabelPipe_Factory(t) { return new (t || LabelPipe)(i0.ɵɵdirectiveInject(i1.LabelService)); };
    LabelPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "label", type: LabelPipe, pure: false });
    LabelPipe.ɵprov = i0.ɵɵdefineInjectable({ token: LabelPipe, factory: LabelPipe.ɵfac, providedIn: 'root' });
    return LabelPipe;
}());
export { LabelPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LabelPipe, [{
        type: Pipe,
        args: [{
                name: 'label',
                pure: false
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.LabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFL0M7SUFVQyxtQkFDUyxZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDdEMsQ0FBQztJQUVMLDZCQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsWUFBcUIsRUFBRSxNQUFZO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDO3NFQVJXLFNBQVM7NkRBQVQsU0FBUztxREFBVCxTQUFTLFdBQVQsU0FBUyxtQkFGVCxNQUFNO29CQVZuQjtDQXNCQyxBQWxCRCxJQWtCQztTQVZZLFNBQVM7a0RBQVQsU0FBUztjQVJyQixJQUFJO2VBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWDs7Y0FFQSxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbGFiZWwnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBsYWJlbFNlcnZpY2U6IExhYmVsU2VydmljZTxMYWJlbD4sXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMubGFiZWxTZXJ2aWNlLnRyYW5zZm9ybShrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0fVxuXG59XG4iXX0=