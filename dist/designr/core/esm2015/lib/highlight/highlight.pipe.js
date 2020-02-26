import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlightPipe {
    transform(text, query) {
        if (!query) {
            return text;
        }
        text = this.encodeHTML(text);
        query = this.encodeHTML(query);
        const regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
        return text.replace(regExp, function (match) {
            return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
        });
    }
    escapeRegexChars(text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    safeToString(text) {
        return text === undefined || text === null ? '' : text.toString().trim();
    }
    encodeHTML(text) {
        return this.safeToString(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
HighlightPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlight", type: HighlightPipe, pure: true });
HighlightPipe.ɵprov = i0.ɵɵdefineInjectable({ token: HighlightPipe, factory: HighlightPipe.ɵfac, providedIn: 'root' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBVWhFLE1BQU0sT0FBTyxhQUFhO0lBRXpCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDMUMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9GLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN4QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDNUIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7YUFDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7YUFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDOzswRUEzQlcsYUFBYTtpRUFBYixhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07a0RBRU4sYUFBYTtjQVJ6QixJQUFJO2VBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7YUFFakI7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdoaWdobGlnaHQnLFxuXHQvLyBwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmICghcXVlcnkpIHtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0XHR0ZXh0ID0gdGhpcy5lbmNvZGVIVE1MKHRleHQpO1xuXHRcdHF1ZXJ5ID0gdGhpcy5lbmNvZGVIVE1MKHF1ZXJ5KTtcblx0XHRjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKCcmW147XSs7fCcgKyB0aGlzLmVzY2FwZVJlZ2V4Q2hhcnMocXVlcnkpLCAnZ2knKTtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ0V4cCwgZnVuY3Rpb24gKG1hdGNoKSB7XG5cdFx0XHRyZXR1cm4gbWF0Y2gudG9Mb3dlckNhc2UoKSA9PT0gcXVlcnkudG9Mb3dlckNhc2UoKSA/ICc8c3Ryb25nPicgKyBtYXRjaCArICc8L3N0cm9uZz4nIDogbWF0Y2g7XG5cdFx0fSk7XG5cdH1cblxuXHRlc2NhcGVSZWdleENoYXJzKHRleHQ6IHN0cmluZykge1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG5cdH1cblxuXHRzYWZlVG9TdHJpbmcodGV4dDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRleHQgPT09IHVuZGVmaW5lZCB8fCB0ZXh0ID09PSBudWxsID8gJycgOiB0ZXh0LnRvU3RyaW5nKCkudHJpbSgpO1xuXHR9XG5cblx0ZW5jb2RlSFRNTCh0ZXh0OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5zYWZlVG9TdHJpbmcodGV4dClcblx0XHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuXHR9XG5cbn1cbiJdfQ==