import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var LinkDefinition = /** @class */ (function () {
    function LinkDefinition() {
    }
    return LinkDefinition;
}());
export { LinkDefinition };
var LinkService = /** @class */ (function () {
    function LinkService(doc) {
        this.doc = doc;
    }
    LinkService.prototype.addTag = function (definition) {
        var element = this.doc.createElement("link");
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    };
    LinkService.prototype.getTag = function (selector) {
        var element = this.doc.querySelector("link" + selector);
        return element;
    };
    LinkService.prototype.updateTag = function (selector, definition) {
        var element = this.doc.querySelector("link" + selector);
        this.updateElementDefinition(element, definition);
    };
    LinkService.prototype.removeTag = function (selector) {
        var element = this.doc.querySelector("link" + selector);
        element.remove();
    };
    LinkService.prototype.updateElementDefinition = function (element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    };
    LinkService.prototype.updateElementAttribute = function (element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
    LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(i0.ɵɵinject(DOCUMENT)); };
    LinkService.ɵprov = i0.ɵɵdefineInjectable({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });
    return LinkService;
}());
export { LinkService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LinkService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL2xpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5EO0lBQUE7SUFJQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFFRDtJQUtDLHFCQUMyQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUMvQixDQUFDO0lBRUwsNEJBQU0sR0FBTixVQUFPLFVBQTBCO1FBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sUUFBZ0I7UUFDdEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBTyxRQUFVLENBQUMsQ0FBQztRQUMxRCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLFFBQWdCLEVBQUUsVUFBMEI7UUFDckQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBTyxRQUFVLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsUUFBZ0I7UUFDekIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBTyxRQUFVLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDZDQUF1QixHQUF2QixVQUF3QixPQUF3QixFQUFFLFVBQTBCO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw0Q0FBc0IsR0FBdEIsVUFBdUIsT0FBd0IsRUFBRSxTQUFpQixFQUFFLEtBQVU7UUFDN0UsSUFBSSxLQUFLLEVBQUU7WUFDVixPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7MEVBdkNXLFdBQVcsY0FHZCxRQUFRO3VEQUhMLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBVm5CO0NBcURDLEFBNUNELElBNENDO1NBekNZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQUlFLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTGlua0RlZmluaXRpb24ge1xuXHRocmVmPzogc3RyaW5nO1xuXHRpZD86IHN0cmluZztcblx0cmVsPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGlua1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG5cdCkgeyB9XG5cblx0YWRkVGFnKGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoYGxpbmtgKTtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQsIGRlZmluaXRpb24pO1xuXHRcdHRoaXMuZG9jLmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdH1cblxuXHRnZXRUYWcoc2VsZWN0b3I6IHN0cmluZykge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHVwZGF0ZVRhZyhzZWxlY3Rvcjogc3RyaW5nLCBkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQsIGRlZmluaXRpb24pO1xuXHR9XG5cblx0cmVtb3ZlVGFnKHNlbGVjdG9yOiBzdHJpbmcpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihgbGluayR7c2VsZWN0b3J9YCk7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fVxuXG5cdHVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQ6IEhUTUxMaW5rRWxlbWVudCwgZGVmaW5pdGlvbjogTGlua0RlZmluaXRpb24pIHtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudCwgJ2hyZWYnLCBkZWZpbml0aW9uLmhyZWYpO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50LCAnaWQnLCBkZWZpbml0aW9uLmlkKTtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudCwgJ3JlbCcsIGRlZmluaXRpb24ucmVsKTtcblx0fVxuXG5cdHVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudDogSFRNTExpbmtFbGVtZW50LCBhdHRyaWJ1dGU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==