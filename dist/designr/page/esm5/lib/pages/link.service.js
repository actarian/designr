/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRW5EO0lBQUE7SUFJQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhBLDhCQUFjOztJQUNkLDRCQUFZOztJQUNaLDZCQUFhOztBQUdkO0lBS0MscUJBQzJCLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQy9CLENBQUM7Ozs7O0lBRUwsNEJBQU07Ozs7SUFBTixVQUFPLFVBQTBCOztZQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLFFBQWdCOztZQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBTyxRQUFVLENBQUM7UUFDekQsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsK0JBQVM7Ozs7O0lBQVQsVUFBVSxRQUFnQixFQUFFLFVBQTBCOztZQUMvQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBTyxRQUFVLENBQUM7UUFDekQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELCtCQUFTOzs7O0lBQVQsVUFBVSxRQUFnQjs7WUFDbkIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQU8sUUFBVSxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCw2Q0FBdUI7Ozs7O0lBQXZCLFVBQXdCLE9BQXdCLEVBQUUsVUFBMEI7UUFDM0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVELDRDQUFzQjs7Ozs7O0lBQXRCLFVBQXVCLE9BQXdCLEVBQUUsU0FBaUIsRUFBRSxLQUFVO1FBQzdFLElBQUksS0FBSyxFQUFFO1lBQ1YsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDOztnQkExQ0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnREFJRSxNQUFNLFNBQUMsUUFBUTs7O3NCQWZsQjtDQXFEQyxBQTVDRCxJQTRDQztTQXpDWSxXQUFXOzs7Ozs7SUFHdEIsMEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBMaW5rRGVmaW5pdGlvbiB7XG5cdGhyZWY/OiBzdHJpbmc7XG5cdGlkPzogc3RyaW5nO1xuXHRyZWw/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcblx0KSB7IH1cblxuXHRhZGRUYWcoZGVmaW5pdGlvbjogTGlua0RlZmluaXRpb24pIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChgbGlua2ApO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudCwgZGVmaW5pdGlvbik7XG5cdFx0dGhpcy5kb2MuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0fVxuXG5cdGdldFRhZyhzZWxlY3Rvcjogc3RyaW5nKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoYGxpbmske3NlbGVjdG9yfWApO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0dXBkYXRlVGFnKHNlbGVjdG9yOiBzdHJpbmcsIGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoYGxpbmske3NlbGVjdG9yfWApO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudCwgZGVmaW5pdGlvbik7XG5cdH1cblxuXHRyZW1vdmVUYWcoc2VsZWN0b3I6IHN0cmluZykge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9XG5cblx0dXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudDogSFRNTExpbmtFbGVtZW50LCBkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50LCAnaHJlZicsIGRlZmluaXRpb24uaHJlZik7XG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdpZCcsIGRlZmluaXRpb24uaWQpO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50LCAncmVsJywgZGVmaW5pdGlvbi5yZWwpO1xuXHR9XG5cblx0dXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50OiBIVE1MTGlua0VsZW1lbnQsIGF0dHJpYnV0ZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0XHR9XG5cdH1cblxufVxuIl19