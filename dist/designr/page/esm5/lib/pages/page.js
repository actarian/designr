/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageMeta = /** @class */ (function () {
    function PageMeta() {
    }
    return PageMeta;
}());
export { PageMeta };
if (false) {
    /** @type {?} */
    PageMeta.prototype.appId;
    /** @type {?} */
    PageMeta.prototype.author;
    /** @type {?} */
    PageMeta.prototype.canonical;
    /** @type {?} */
    PageMeta.prototype.description;
    /** @type {?} */
    PageMeta.prototype.keywords;
    /** @type {?} */
    PageMeta.prototype.locale;
    /** @type {?} */
    PageMeta.prototype.robots;
    /** @type {?} */
    PageMeta.prototype.title;
    /** @type {?} */
    PageMeta.prototype.type;
}
var PageIndex = /** @class */ (function () {
    function PageIndex(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
    return PageIndex;
}());
export { PageIndex };
if (false) {
    /** @type {?} */
    PageIndex.prototype.id;
    /** @type {?} */
    PageIndex.prototype.slug;
    /** @type {?} */
    PageIndex.prototype.url;
    /** @type {?} */
    PageIndex.prototype.name;
    /** @type {?} */
    PageIndex.prototype.title;
    /** @type {?} */
    PageIndex.prototype.abstract;
    /** @type {?} */
    PageIndex.prototype.images;
    /** @type {?} */
    PageIndex.prototype.type;
    /** @type {?} */
    PageIndex.prototype.relationType;
}
var PageRelation = /** @class */ (function () {
    function PageRelation() {
    }
    return PageRelation;
}());
export { PageRelation };
if (false) {
    /** @type {?} */
    PageRelation.prototype.id;
    /** @type {?} */
    PageRelation.prototype.page;
    /** @type {?} */
    PageRelation.prototype.type;
}
var Page = /** @class */ (function () {
    function Page(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                /** @type {?} */
                var related = options.related.map(function (x) {
                    // const item = new PageIndex(x.page);
                    /** @type {?} */
                    var item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                });
                this.related = related;
            }
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    Page.prototype.getFeature = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.features.find(function (x) { return x.id === id; }) || null;
    };
    /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    Page.prototype.getFeatures = /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    function (type, n) {
        return this.features ? this.features.filter(function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); }).sort(function (a, b) { return a.type - b.type; }) : [];
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Page.prototype.getFeaturesByTypes = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.features ? this.features.filter(function (x) { return (type.indexOf(Number(x.type)) !== -1); }) : [];
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Page.prototype.getGroupedFeaturesByTypes = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        /** @type {?} */
        var groups = {};
        type.forEach(function (type) {
            /** @type {?} */
            var group = groups[type] || { features: [] };
            if (_this.features) {
                _this.features.forEach(function (x) {
                    if (Number(x.type) === type) {
                        group.features.push(x);
                    }
                });
            }
            groups[type] = group;
        });
        /*
        if (this.features) {
            this.features.forEach((x: Feature) => {
                if (type.indexOf(Number(x.type)) !== -1) {
                    const group = groups[x.type] || { features: [] };
                    group.features.push(x);
                    groups[x.type] = group;
                }
            });
        }
        */
        return groups;
    };
    return Page;
}());
export { Page };
if (false) {
    /** @type {?} */
    Page.prototype.id;
    /** @type {?} */
    Page.prototype.slug;
    /** @type {?} */
    Page.prototype.url;
    /** @type {?} */
    Page.prototype.name;
    /** @type {?} */
    Page.prototype.title;
    /** @type {?} */
    Page.prototype.abstract;
    /** @type {?} */
    Page.prototype.description;
    /** @type {?} */
    Page.prototype.features;
    /** @type {?} */
    Page.prototype.meta;
    /** @type {?} */
    Page.prototype.images;
    /** @type {?} */
    Page.prototype.related;
    /** @type {?} */
    Page.prototype.taxonomies;
    /** @type {?} */
    Page.prototype.type;
    /** @type {?} */
    Page.prototype.component;
    /** @type {?} */
    Page.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFBQTtJQVVBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQSx5QkFBZTs7SUFDZiwwQkFBZ0I7O0lBQ2hCLDZCQUFtQjs7SUFDbkIsK0JBQXFCOztJQUNyQiw0QkFBa0I7O0lBQ2xCLDBCQUFnQjs7SUFDaEIsMEJBQWdCOztJQUNoQix5QkFBZTs7SUFDZix3QkFBYzs7QUFHZjtJQVdDLG1CQUFZLE9BQW1CO1FBQzlCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7O0lBZkEsdUJBQW9COztJQUNwQix5QkFBYzs7SUFDZCx3QkFBYTs7SUFDYix5QkFBYzs7SUFDZCwwQkFBZTs7SUFDZiw2QkFBa0I7O0lBQ2xCLDJCQUFpQjs7SUFDakIseUJBQXVCOztJQUN2QixpQ0FBK0I7O0FBU2hDO0lBQUE7SUFJQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhBLDBCQUFvQjs7SUFDcEIsNEJBQVc7O0lBQ1gsNEJBQXVCOztBQUd4QjtJQWlCQyxjQUFZLE9BQWM7UUFSMUIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQVNwQixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7b0JBQ2QsT0FBTyxHQUFnQixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQWU7Ozt3QkFFMUQsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMzQixPQUFPLElBQUksQ0FBQztnQkFDYixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQseUJBQVU7Ozs7SUFBVixVQUFZLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCwwQkFBVzs7Ozs7SUFBWCxVQUFhLElBQVksRUFBRSxDQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBUyxJQUFLLE9BQUEsQ0FDdEUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQ2pELEVBRnNFLENBRXRFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBVSxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpQ0FBa0I7Ozs7SUFBbEIsVUFBb0IsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBVSxJQUFLLE9BQUEsQ0FDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ25DLEVBRjJELENBRTNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCx3Q0FBeUI7Ozs7SUFBekIsVUFBMkIsSUFBYztRQUF6QyxpQkF5QkM7O1lBeEJNLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOztnQkFDVixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBVTtvQkFDaEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO2dCQUNGLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0g7Ozs7Ozs7Ozs7VUFVRTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDLEFBNUVELElBNEVDOzs7O0lBM0VBLGtCQUFvQjs7SUFDcEIsb0JBQWM7O0lBQ2QsbUJBQWE7O0lBQ2Isb0JBQWM7O0lBQ2QscUJBQWU7O0lBQ2Ysd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLHdCQUFxQjs7SUFDckIsb0JBQXFCOztJQUNyQixzQkFBaUI7O0lBQ2pCLHVCQUFzQjs7SUFDdEIsMEJBQXdCOztJQUN4QixvQkFBdUI7O0lBQ3ZCLHlCQUE0Qjs7SUFDNUIsc0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnQsIEZlYXR1cmUsIEltYWdlLCBUYXhvbm9teSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgUGFnZU1ldGEge1xuXHRhcHBJZD86IHN0cmluZztcblx0YXV0aG9yPzogc3RyaW5nO1xuXHRjYW5vbmljYWw/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRrZXl3b3Jkcz86IHN0cmluZztcblx0bG9jYWxlPzogc3RyaW5nO1xuXHRyb2JvdHM/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZUluZGV4IGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRzbHVnPzogc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRhYnN0cmFjdD86IHN0cmluZztcblx0aW1hZ2VzPzogSW1hZ2VbXTtcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcblx0cmVsYXRpb25UeXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlSW5kZXgpIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VSZWxhdGlvbiBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0cGFnZTogUGFnZTtcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2UgaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdGFic3RyYWN0Pzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0ZmVhdHVyZXM/OiBGZWF0dXJlW107XG5cdG1ldGE/OiBQYWdlTWV0YSA9IHt9O1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHRyZWxhdGVkPzogUGFnZUluZGV4W107XG5cdHRheG9ub21pZXM/OiBUYXhvbm9teVtdO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHRjb21wb25lbnQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cdGFjdGl2ZT86IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2UpIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHRcdGlmIChvcHRpb25zLnJlbGF0ZWQpIHtcblx0XHRcdFx0Y29uc3QgcmVsYXRlZDogUGFnZUluZGV4W10gPSBvcHRpb25zLnJlbGF0ZWQubWFwKCh4OiBQYWdlUmVsYXRpb24pID0+IHtcblx0XHRcdFx0XHQvLyBjb25zdCBpdGVtID0gbmV3IFBhZ2VJbmRleCh4LnBhZ2UpO1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBuZXcgUGFnZUluZGV4KHgpO1xuXHRcdFx0XHRcdGl0ZW0ucmVsYXRpb25UeXBlID0geC50eXBlO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5yZWxhdGVkID0gcmVsYXRlZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXRGZWF0dXJlPyhpZDogbnVtYmVyKTogRmVhdHVyZSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMuZmluZCh4ID0+IHguaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0Z2V0RmVhdHVyZXM/KHR5cGU6IG51bWJlciwgbjogbnVtYmVyW10pOiBGZWF0dXJlW10ge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUsIGk6IG51bWJlcikgPT4gKFxuXHRcdFx0bi5pbmRleE9mKE51bWJlcih4LmlkKSkgIT09IC0xICYmIHgudHlwZSA9PT0gdHlwZVxuXHRcdCkpLnNvcnQoKGE6IEZlYXR1cmUsIGI6IEZlYXR1cmUpID0+IGEudHlwZSAtIGIudHlwZSkgOiBbXTtcblx0fVxuXG5cdGdldEZlYXR1cmVzQnlUeXBlcz8odHlwZTogbnVtYmVyW10pOiBGZWF0dXJlW10ge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUpID0+IChcblx0XHRcdHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xXG5cdFx0KSkgOiBbXTtcblx0fVxuXG5cdGdldEdyb3VwZWRGZWF0dXJlc0J5VHlwZXM/KHR5cGU6IG51bWJlcltdKTogYW55IHtcblx0XHRjb25zdCBncm91cHMgPSB7fTtcblx0XHR0eXBlLmZvckVhY2godHlwZSA9PiB7XG5cdFx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1t0eXBlXSB8fCB7IGZlYXR1cmVzOiBbXSB9O1xuXHRcdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcblx0XHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKE51bWJlcih4LnR5cGUpID09PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRncm91cHNbdHlwZV0gPSBncm91cDtcblx0XHR9KTtcblx0XHQvKlxuXHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XG5cdFx0XHR0aGlzLmZlYXR1cmVzLmZvckVhY2goKHg6IEZlYXR1cmUpID0+IHtcblx0XHRcdFx0aWYgKHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbeC50eXBlXSB8fCB7IGZlYXR1cmVzOiBbXSB9O1xuXHRcdFx0XHRcdGdyb3VwLmZlYXR1cmVzLnB1c2goeCk7XG5cdFx0XHRcdFx0Z3JvdXBzW3gudHlwZV0gPSBncm91cDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdCovXG5cdFx0cmV0dXJuIGdyb3Vwcztcblx0fVxuXG5cbn1cbiJdfQ==