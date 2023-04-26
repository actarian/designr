/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlightPipe {
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    transform(text, query) {
        if (!query) {
            return text;
        }
        text = this.encodeHTML(text);
        query = this.encodeHTML(query);
        /** @type {?} */
        const regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
        return text.replace(regExp, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
        }));
    }
    /**
     * @param {?} text
     * @return {?}
     */
    escapeRegexChars(text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * @param {?} text
     * @return {?}
     */
    safeToString(text) {
        return text === undefined || text === null ? '' : text.toString().trim();
    }
    /**
     * @param {?} text
     * @return {?}
     */
    encodeHTML(text) {
        return this.safeToString(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'highlight',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ HighlightPipe.ngInjectableDef = i0.defineInjectable({ factory: function HighlightPipe_Factory() { return new HighlightPipe(); }, token: HighlightPipe, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQVVoRSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBRXpCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztjQUN6QixNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDMUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBRSxVQUFVLEtBQUs7WUFDMUMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9GLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3hCLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDNUIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7YUFDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7YUFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFuQ0QsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxXQUFXO2FBRWpCO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG5cdG5hbWU6ICdoaWdobGlnaHQnLFxyXG5cdC8vIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKCFxdWVyeSkge1xyXG5cdFx0XHRyZXR1cm4gdGV4dDtcclxuXHRcdH1cclxuXHRcdHRleHQgPSB0aGlzLmVuY29kZUhUTUwodGV4dCk7XHJcblx0XHRxdWVyeSA9IHRoaXMuZW5jb2RlSFRNTChxdWVyeSk7XHJcblx0XHRjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKCcmW147XSs7fCcgKyB0aGlzLmVzY2FwZVJlZ2V4Q2hhcnMocXVlcnkpLCAnZ2knKTtcclxuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UocmVnRXhwLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuXHRcdFx0cmV0dXJuIG1hdGNoLnRvTG93ZXJDYXNlKCkgPT09IHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPyAnPHN0cm9uZz4nICsgbWF0Y2ggKyAnPC9zdHJvbmc+JyA6IG1hdGNoO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRlc2NhcGVSZWdleENoYXJzKHRleHQ6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcclxuXHR9XHJcblxyXG5cdHNhZmVUb1N0cmluZyh0ZXh0OiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0ZXh0ID09PSB1bmRlZmluZWQgfHwgdGV4dCA9PT0gbnVsbCA/ICcnIDogdGV4dC50b1N0cmluZygpLnRyaW0oKTtcclxuXHR9XHJcblxyXG5cdGVuY29kZUhUTUwodGV4dDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zYWZlVG9TdHJpbmcodGV4dClcclxuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuXHRcdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG5cdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19