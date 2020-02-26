import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (text, query) {
        if (!query) {
            return text;
        }
        text = this.encodeHTML(text);
        query = this.encodeHTML(query);
        var regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
        return text.replace(regExp, function (match) {
            return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
        });
    };
    HighlightPipe.prototype.escapeRegexChars = function (text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    HighlightPipe.prototype.safeToString = function (text) {
        return text === undefined || text === null ? '' : text.toString().trim();
    };
    HighlightPipe.prototype.encodeHTML = function (text) {
        return this.safeToString(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
    HighlightPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlight", type: HighlightPipe, pure: true });
    HighlightPipe.ɵprov = i0.ɵɵdefineInjectable({ token: HighlightPipe, factory: HighlightPipe.ɵfac, providedIn: 'root' });
    return HighlightPipe;
}());
export { HighlightPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HighlightPipe, [{
        type: Pipe,
        args: [{
                name: 'highlight',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRWhFO0lBQUE7S0FxQ0M7SUEzQkEsaUNBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsS0FBSztZQUMxQyxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsSUFBWTtRQUN4QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDNUIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7YUFDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7YUFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDOzhFQTNCVyxhQUFhO3FFQUFiLGFBQWE7eURBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRmIsTUFBTTt3QkFSbkI7Q0F1Q0MsQUFyQ0QsSUFxQ0M7U0E3QlksYUFBYTtrREFBYixhQUFhO2NBUnpCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsV0FBVzthQUVqQjs7Y0FFQSxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2hpZ2hsaWdodCcsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0dHJhbnNmb3JtKHRleHQ6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0aWYgKCFxdWVyeSkge1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fVxuXHRcdHRleHQgPSB0aGlzLmVuY29kZUhUTUwodGV4dCk7XG5cdFx0cXVlcnkgPSB0aGlzLmVuY29kZUhUTUwocXVlcnkpO1xuXHRcdGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoJyZbXjtdKzt8JyArIHRoaXMuZXNjYXBlUmVnZXhDaGFycyhxdWVyeSksICdnaScpO1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UocmVnRXhwLCBmdW5jdGlvbiAobWF0Y2gpIHtcblx0XHRcdHJldHVybiBtYXRjaC50b0xvd2VyQ2FzZSgpID09PSBxdWVyeS50b0xvd2VyQ2FzZSgpID8gJzxzdHJvbmc+JyArIG1hdGNoICsgJzwvc3Ryb25nPicgOiBtYXRjaDtcblx0XHR9KTtcblx0fVxuXG5cdGVzY2FwZVJlZ2V4Q2hhcnModGV4dDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcblx0fVxuXG5cdHNhZmVUb1N0cmluZyh0ZXh0OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRleHQgPT09IG51bGwgPyAnJyA6IHRleHQudG9TdHJpbmcoKS50cmltKCk7XG5cdH1cblxuXHRlbmNvZGVIVE1MKHRleHQ6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnNhZmVUb1N0cmluZyh0ZXh0KVxuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cdH1cblxufVxuIl19