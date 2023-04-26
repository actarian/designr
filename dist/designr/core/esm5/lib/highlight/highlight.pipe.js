/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    HighlightPipe.prototype.transform = /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    function (text, query) {
        if (!query) {
            return text;
        }
        text = this.encodeHTML(text);
        query = this.encodeHTML(query);
        /** @type {?} */
        var regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
        return text.replace(regExp, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
        }));
    };
    /**
     * @param {?} text
     * @return {?}
     */
    HighlightPipe.prototype.escapeRegexChars = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    /**
     * @param {?} text
     * @return {?}
     */
    HighlightPipe.prototype.safeToString = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return text === undefined || text === null ? '' : text.toString().trim();
    };
    /**
     * @param {?} text
     * @return {?}
     */
    HighlightPipe.prototype.encodeHTML = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.safeToString(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    HighlightPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'highlight',
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ HighlightPipe.ngInjectableDef = i0.defineInjectable({ factory: function HighlightPipe_Factory() { return new HighlightPipe(); }, token: HighlightPipe, providedIn: "root" });
    return HighlightPipe;
}());
export { HighlightPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVoRTtJQUFBO0tBcUNDOzs7Ozs7SUEzQkEsaUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUN6QixNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDMUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBRSxVQUFVLEtBQUs7WUFDMUMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9GLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx3Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN4QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2FBQzVCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Z0JBbkNELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsV0FBVztpQkFFakI7Z0JBRUEsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7O3dCQVREO0NBdUNDLEFBckNELElBcUNDO1NBN0JZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ2hpZ2hsaWdodCcsXHJcblx0Ly8gcHVyZTogZmFsc2VcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblx0dHJhbnNmb3JtKHRleHQ6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHRpZiAoIXF1ZXJ5KSB7XHJcblx0XHRcdHJldHVybiB0ZXh0O1xyXG5cdFx0fVxyXG5cdFx0dGV4dCA9IHRoaXMuZW5jb2RlSFRNTCh0ZXh0KTtcclxuXHRcdHF1ZXJ5ID0gdGhpcy5lbmNvZGVIVE1MKHF1ZXJ5KTtcclxuXHRcdGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoJyZbXjtdKzt8JyArIHRoaXMuZXNjYXBlUmVnZXhDaGFycyhxdWVyeSksICdnaScpO1xyXG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZShyZWdFeHAsIGZ1bmN0aW9uIChtYXRjaCkge1xyXG5cdFx0XHRyZXR1cm4gbWF0Y2gudG9Mb3dlckNhc2UoKSA9PT0gcXVlcnkudG9Mb3dlckNhc2UoKSA/ICc8c3Ryb25nPicgKyBtYXRjaCArICc8L3N0cm9uZz4nIDogbWF0Y2g7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGVzY2FwZVJlZ2V4Q2hhcnModGV4dDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xyXG5cdH1cclxuXHJcblx0c2FmZVRvU3RyaW5nKHRleHQ6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHRleHQgPT09IHVuZGVmaW5lZCB8fCB0ZXh0ID09PSBudWxsID8gJycgOiB0ZXh0LnRvU3RyaW5nKCkudHJpbSgpO1xyXG5cdH1cclxuXHJcblx0ZW5jb2RlSFRNTCh0ZXh0OiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLnNhZmVUb1N0cmluZyh0ZXh0KVxyXG5cdFx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxyXG5cdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=