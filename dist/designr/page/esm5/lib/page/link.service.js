/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var LinkDefinition = /** @class */ (function () {
    function LinkDefinition() {
    }
    return LinkDefinition;
}());
export { LinkDefinition };
if (false) {
    /** @type {?} */
    LinkDefinition.prototype.href;
    /** @type {?} */
    LinkDefinition.prototype.id;
    /** @type {?} */
    LinkDefinition.prototype.rel;
}
var LinkService = /** @class */ (function () {
    function LinkService(doc) {
        this.doc = doc;
    }
    /**
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.addTag = /**
     * @param {?} definition
     * @return {?}
     */
    function (definition) {
        /** @type {?} */
        var element = this.doc.createElement("link");
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    LinkService.prototype.getTag = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        return element;
    };
    /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.updateTag = /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    function (selector, definition) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        this.updateElementDefinition(element, definition);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    LinkService.prototype.removeTag = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        element.remove();
    };
    /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.updateElementDefinition = /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    function (element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    LinkService.prototype.updateElementAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    function (element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
    LinkService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LinkService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LinkService.ngInjectableDef = i0.defineInjectable({ factory: function LinkService_Factory() { return new LinkService(i0.inject(i1.DOCUMENT)); }, token: LinkService, providedIn: "root" });
    return LinkService;
}());
export { LinkService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LinkService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL2xpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFbkQ7SUFBQTtJQUlBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsOEJBQWM7O0lBQ2QsNEJBQVk7O0lBQ1osNkJBQWE7O0FBR2Q7SUFLQyxxQkFDMkIsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDL0IsQ0FBQzs7Ozs7SUFFTCw0QkFBTTs7OztJQUFOLFVBQU8sVUFBMEI7O1lBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sUUFBZ0I7O1lBQ2hCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFPLFFBQVUsQ0FBQztRQUN6RCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFRCwrQkFBUzs7Ozs7SUFBVCxVQUFVLFFBQWdCLEVBQUUsVUFBMEI7O1lBQy9DLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFPLFFBQVUsQ0FBQztRQUN6RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsK0JBQVM7Ozs7SUFBVCxVQUFVLFFBQWdCOztZQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBTyxRQUFVLENBQUM7UUFDekQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELDZDQUF1Qjs7Ozs7SUFBdkIsVUFBd0IsT0FBd0IsRUFBRSxVQUEwQjtRQUMzRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRUQsNENBQXNCOzs7Ozs7SUFBdEIsVUFBdUIsT0FBd0IsRUFBRSxTQUFpQixFQUFFLEtBQVU7UUFDN0UsSUFBSSxLQUFLLEVBQUU7WUFDVixPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7O2dCQTFDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dEQUlFLE1BQU0sU0FBQyxRQUFROzs7c0JBZmxCO0NBcURDLEFBNUNELElBNENDO1NBekNZLFdBQVc7Ozs7OztJQUd0QiwwQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtEZWZpbml0aW9uIHtcclxuXHRocmVmPzogc3RyaW5nO1xyXG5cdGlkPzogc3RyaW5nO1xyXG5cdHJlbD86IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtTZXJ2aWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG5cdCkgeyB9XHJcblxyXG5cdGFkZFRhZyhkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoYGxpbmtgKTtcclxuXHRcdHRoaXMudXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudCwgZGVmaW5pdGlvbik7XHJcblx0XHR0aGlzLmRvYy5oZWFkLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGFnKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcclxuXHRcdHJldHVybiBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVGFnKHNlbGVjdG9yOiBzdHJpbmcsIGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XHJcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihgbGluayR7c2VsZWN0b3J9YCk7XHJcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnREZWZpbml0aW9uKGVsZW1lbnQsIGRlZmluaXRpb24pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlVGFnKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcclxuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVFbGVtZW50RGVmaW5pdGlvbihlbGVtZW50OiBIVE1MTGlua0VsZW1lbnQsIGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XHJcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudCwgJ2hyZWYnLCBkZWZpbml0aW9uLmhyZWYpO1xyXG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdpZCcsIGRlZmluaXRpb24uaWQpO1xyXG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdyZWwnLCBkZWZpbml0aW9uLnJlbCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQ6IEhUTUxMaW5rRWxlbWVudCwgYXR0cmlidXRlOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=