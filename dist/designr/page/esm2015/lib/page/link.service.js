/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class LinkDefinition {
}
if (false) {
    /** @type {?} */
    LinkDefinition.prototype.href;
    /** @type {?} */
    LinkDefinition.prototype.id;
    /** @type {?} */
    LinkDefinition.prototype.rel;
}
export class LinkService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * @param {?} definition
     * @return {?}
     */
    addTag(definition) {
        /** @type {?} */
        const element = this.doc.createElement(`link`);
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    getTag(selector) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        return element;
    }
    /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    updateTag(selector, definition) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        this.updateElementDefinition(element, definition);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    removeTag(selector) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        element.remove();
    }
    /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    updateElementDefinition(element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    }
    /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    updateElementAttribute(element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    }
}
LinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LinkService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ LinkService.ngInjectableDef = i0.defineInjectable({ factory: function LinkService_Factory() { return new LinkService(i0.inject(i1.DOCUMENT)); }, token: LinkService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LinkService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL2xpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFbkQsTUFBTSxPQUFPLGNBQWM7Q0FJMUI7OztJQUhBLDhCQUFjOztJQUNkLDRCQUFZOztJQUNaLDZCQUFhOztBQU1kLE1BQU0sT0FBTyxXQUFXOzs7O0lBRXZCLFlBQzJCLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQy9CLENBQUM7Ozs7O0lBRUwsTUFBTSxDQUFDLFVBQTBCOztjQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWdCOztjQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxRQUFRLEVBQUUsQ0FBQztRQUN6RCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsUUFBZ0IsRUFBRSxVQUEwQjs7Y0FDL0MsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxRQUFnQjs7Y0FDbkIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFDekQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELHVCQUF1QixDQUFDLE9BQXdCLEVBQUUsVUFBMEI7UUFDM0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVELHNCQUFzQixDQUFDLE9BQXdCLEVBQUUsU0FBaUIsRUFBRSxLQUFVO1FBQzdFLElBQUksS0FBSyxFQUFFO1lBQ1YsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDOzs7WUExQ0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7OzRDQUlFLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQUFoQiwwQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtEZWZpbml0aW9uIHtcclxuXHRocmVmPzogc3RyaW5nO1xyXG5cdGlkPzogc3RyaW5nO1xyXG5cdHJlbD86IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtTZXJ2aWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG5cdCkgeyB9XHJcblxyXG5cdGFkZFRhZyhkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoYGxpbmtgKTtcclxuXHRcdHRoaXMudXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudCwgZGVmaW5pdGlvbik7XHJcblx0XHR0aGlzLmRvYy5oZWFkLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGFnKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcclxuXHRcdHJldHVybiBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVGFnKHNlbGVjdG9yOiBzdHJpbmcsIGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XHJcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihgbGluayR7c2VsZWN0b3J9YCk7XHJcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQsIGRlZmluaXRpb24pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlVGFnKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVFbGVtZW50RGVmaW5pdGlvbihlbGVtZW50OiBIVE1MTGlua0VsZW1lbnQsIGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XHJcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudCwgJ2hyZWYnLCBkZWZpbml0aW9uLmhyZWYpO1xyXG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdpZCcsIGRlZmluaXRpb24uaWQpO1xyXG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdyZWwnLCBkZWZpbml0aW9uLnJlbCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQ6IEhUTUxMaW5rRWxlbWVudCwgYXR0cmlidXRlOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=