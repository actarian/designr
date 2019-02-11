/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return text.replace(regExp, function (match) {
            return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVoRTtJQUFBO0tBcUNDOzs7Ozs7SUEzQkEsaUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUN6QixNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDMUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDMUMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9GLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx3Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN4QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2FBQzVCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Z0JBbkNELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsV0FBVztpQkFFakI7Z0JBRUEsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7O3dCQVREO0NBdUNDLEFBckNELElBcUNDO1NBN0JZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2hpZ2hsaWdodCcsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0dHJhbnNmb3JtKHRleHQ6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0aWYgKCFxdWVyeSkge1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fVxuXHRcdHRleHQgPSB0aGlzLmVuY29kZUhUTUwodGV4dCk7XG5cdFx0cXVlcnkgPSB0aGlzLmVuY29kZUhUTUwocXVlcnkpO1xuXHRcdGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoJyZbXjtdKzt8JyArIHRoaXMuZXNjYXBlUmVnZXhDaGFycyhxdWVyeSksICdnaScpO1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UocmVnRXhwLCBmdW5jdGlvbiAobWF0Y2gpIHtcblx0XHRcdHJldHVybiBtYXRjaC50b0xvd2VyQ2FzZSgpID09PSBxdWVyeS50b0xvd2VyQ2FzZSgpID8gJzxzdHJvbmc+JyArIG1hdGNoICsgJzwvc3Ryb25nPicgOiBtYXRjaDtcblx0XHR9KTtcblx0fVxuXG5cdGVzY2FwZVJlZ2V4Q2hhcnModGV4dDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcblx0fVxuXG5cdHNhZmVUb1N0cmluZyh0ZXh0OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRleHQgPT09IG51bGwgPyAnJyA6IHRleHQudG9TdHJpbmcoKS50cmltKCk7XG5cdH1cblxuXHRlbmNvZGVIVE1MKHRleHQ6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnNhZmVUb1N0cmluZyh0ZXh0KVxuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cdH1cblxufVxuIl19