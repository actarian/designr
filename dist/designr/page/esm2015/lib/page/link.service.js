import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LinkDefinition {
}
export class LinkService {
    constructor(doc) {
        this.doc = doc;
    }
    addTag(definition) {
        const element = this.doc.createElement(`link`);
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    }
    getTag(selector) {
        const element = this.doc.querySelector(`link${selector}`);
        return element;
    }
    updateTag(selector, definition) {
        const element = this.doc.querySelector(`link${selector}`);
        this.updateElementDefinition(element, definition);
    }
    removeTag(selector) {
        const element = this.doc.querySelector(`link${selector}`);
        element.remove();
    }
    updateElementDefinition(element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    }
    updateElementAttribute(element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    }
}
LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(i0.ɵɵinject(DOCUMENT)); };
LinkService.ɵprov = i0.ɵɵdefineInjectable({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LinkService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL2xpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxjQUFjO0NBSTFCO0FBS0QsTUFBTSxPQUFPLFdBQVc7SUFFdkIsWUFDMkIsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDL0IsQ0FBQztJQUVMLE1BQU0sQ0FBQyxVQUEwQjtRQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQWdCO1FBQ3RCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQWdCLEVBQUUsVUFBMEI7UUFDckQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFnQjtRQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxPQUF3QixFQUFFLFVBQTBCO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxPQUF3QixFQUFFLFNBQWlCLEVBQUUsS0FBVTtRQUM3RSxJQUFJLEtBQUssRUFBRTtZQUNWLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7c0VBdkNXLFdBQVcsY0FHZCxRQUFRO21EQUhMLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07a0RBRU4sV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQUlFLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTGlua0RlZmluaXRpb24ge1xuXHRocmVmPzogc3RyaW5nO1xuXHRpZD86IHN0cmluZztcblx0cmVsPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGlua1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG5cdCkgeyB9XG5cblx0YWRkVGFnKGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoYGxpbmtgKTtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQsIGRlZmluaXRpb24pO1xuXHRcdHRoaXMuZG9jLmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdH1cblxuXHRnZXRUYWcoc2VsZWN0b3I6IHN0cmluZykge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHVwZGF0ZVRhZyhzZWxlY3Rvcjogc3RyaW5nLCBkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQsIGRlZmluaXRpb24pO1xuXHR9XG5cblx0cmVtb3ZlVGFnKHNlbGVjdG9yOiBzdHJpbmcpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihgbGluayR7c2VsZWN0b3J9YCk7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fVxuXG5cdHVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQ6IEhUTUxMaW5rRWxlbWVudCwgZGVmaW5pdGlvbjogTGlua0RlZmluaXRpb24pIHtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudCwgJ2hyZWYnLCBkZWZpbml0aW9uLmhyZWYpO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50LCAnaWQnLCBkZWZpbml0aW9uLmlkKTtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudCwgJ3JlbCcsIGRlZmluaXRpb24ucmVsKTtcblx0fVxuXG5cdHVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudDogSFRNTExpbmtFbGVtZW50LCBhdHRyaWJ1dGU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==