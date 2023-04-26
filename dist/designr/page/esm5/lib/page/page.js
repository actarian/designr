/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Pages() { }
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
    PageIndex.prototype.component;
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
                var related = options.related.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    // const item = new PageIndex(x.page);
                    /** @type {?} */
                    var item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                }));
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
        return this.features.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === id; })) || null;
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
        return this.features ? this.features.filter((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.type - b.type; })) : [];
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
        return this.features ? this.features.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return (type.indexOf(Number(x.type)) !== -1); })) : [];
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
        type.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /** @type {?} */
            var group = groups[type] || { features: [] };
            if (_this.features) {
                _this.features.forEach((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    if (Number(x.type) === type) {
                        group.features.push(x);
                    }
                }));
            }
            groups[type] = group;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSwyQkFBOEQ7QUFFOUQ7SUFBQTtJQVVBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQSx5QkFBZTs7SUFDZiwwQkFBZ0I7O0lBQ2hCLDZCQUFtQjs7SUFDbkIsK0JBQXFCOztJQUNyQiw0QkFBa0I7O0lBQ2xCLDBCQUFnQjs7SUFDaEIsMEJBQWdCOztJQUNoQix5QkFBZTs7SUFDZix3QkFBYzs7QUFHZjtJQVlDLG1CQUFZLE9BQW1CO1FBQzlCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7O0lBaEJBLHVCQUFvQjs7SUFDcEIseUJBQWM7O0lBQ2Qsd0JBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsMEJBQWU7O0lBQ2YsNkJBQWtCOztJQUNsQiwyQkFBaUI7O0lBQ2pCLDhCQUE0Qjs7SUFDNUIseUJBQXVCOztJQUN2QixpQ0FBK0I7O0FBU2hDO0lBQUE7SUFJQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhBLDBCQUFvQjs7SUFDcEIsNEJBQVc7O0lBQ1gsNEJBQXVCOztBQUd4QjtJQWlCQyxjQUFZLE9BQWM7UUFSMUIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQVNwQixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7b0JBQ2QsT0FBTyxHQUFnQixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7Z0JBQUMsVUFBQyxDQUFlOzs7d0JB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cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9jdW1lbnQsIEZlYXR1cmUsIEltYWdlLCBUYXhvbm9teSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VzIHsgW2tleTogc3RyaW5nXTogVHlwZTxQYWdlQ29tcG9uZW50PjsgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhIHtcclxuXHRhcHBJZD86IHN0cmluZztcclxuXHRhdXRob3I/OiBzdHJpbmc7XHJcblx0Y2Fub25pY2FsPzogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG5cdGtleXdvcmRzPzogc3RyaW5nO1xyXG5cdGxvY2FsZT86IHN0cmluZztcclxuXHRyb2JvdHM/OiBzdHJpbmc7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0dHlwZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VJbmRleCBpbXBsZW1lbnRzIERvY3VtZW50IHtcclxuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG5cdHNsdWc/OiBzdHJpbmc7XHJcblx0dXJsPzogc3RyaW5nO1xyXG5cdG5hbWU/OiBzdHJpbmc7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0YWJzdHJhY3Q/OiBzdHJpbmc7XHJcblx0aW1hZ2VzPzogSW1hZ2VbXTtcclxuXHRjb21wb25lbnQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcclxuXHRyZWxhdGlvblR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlSW5kZXgpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZVJlbGF0aW9uIGltcGxlbWVudHMgRG9jdW1lbnQge1xyXG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcblx0cGFnZTogUGFnZTtcclxuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZSBpbXBsZW1lbnRzIERvY3VtZW50IHtcclxuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG5cdHNsdWc/OiBzdHJpbmc7XHJcblx0dXJsPzogc3RyaW5nO1xyXG5cdG5hbWU/OiBzdHJpbmc7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0YWJzdHJhY3Q/OiBzdHJpbmc7XHJcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcblx0ZmVhdHVyZXM/OiBGZWF0dXJlW107XHJcblx0bWV0YT86IFBhZ2VNZXRhID0ge307XHJcblx0aW1hZ2VzPzogSW1hZ2VbXTtcclxuXHRyZWxhdGVkPzogUGFnZUluZGV4W107XHJcblx0dGF4b25vbWllcz86IFRheG9ub215W107XHJcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcclxuXHRjb21wb25lbnQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcblx0YWN0aXZlPzogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2UpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHRcdGlmIChvcHRpb25zLnJlbGF0ZWQpIHtcclxuXHRcdFx0XHRjb25zdCByZWxhdGVkOiBQYWdlSW5kZXhbXSA9IG9wdGlvbnMucmVsYXRlZC5tYXAoKHg6IFBhZ2VSZWxhdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc3QgaXRlbSA9IG5ldyBQYWdlSW5kZXgoeC5wYWdlKTtcclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBuZXcgUGFnZUluZGV4KHgpO1xyXG5cdFx0XHRcdFx0aXRlbS5yZWxhdGlvblR5cGUgPSB4LnR5cGU7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnJlbGF0ZWQgPSByZWxhdGVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRGZWF0dXJlPyhpZDogbnVtYmVyKTogRmVhdHVyZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcy5maW5kKHggPT4geC5pZCA9PT0gaWQpIHx8IG51bGw7XHJcblx0fVxyXG5cclxuXHRnZXRGZWF0dXJlcz8odHlwZTogbnVtYmVyLCBuOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlLCBpOiBudW1iZXIpID0+IChcclxuXHRcdFx0bi5pbmRleE9mKE51bWJlcih4LmlkKSkgIT09IC0xICYmIHgudHlwZSA9PT0gdHlwZVxyXG5cdFx0KSkuc29ydCgoYTogRmVhdHVyZSwgYjogRmVhdHVyZSkgPT4gYS50eXBlIC0gYi50eXBlKSA6IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0RmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlKSA9PiAoXHJcblx0XHRcdHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xXHJcblx0XHQpKSA6IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0R3JvdXBlZEZlYXR1cmVzQnlUeXBlcz8odHlwZTogbnVtYmVyW10pOiBhbnkge1xyXG5cdFx0Y29uc3QgZ3JvdXBzID0ge307XHJcblx0XHR0eXBlLmZvckVhY2godHlwZSA9PiB7XHJcblx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW3R5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XHJcblx0XHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XHJcblx0XHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoTnVtYmVyKHgudHlwZSkgPT09IHR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRncm91cHNbdHlwZV0gPSBncm91cDtcclxuXHRcdH0pO1xyXG5cdFx0LypcclxuXHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XHJcblx0XHRcdHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoeDogRmVhdHVyZSkgPT4ge1xyXG5cdFx0XHRcdGlmICh0eXBlLmluZGV4T2YoTnVtYmVyKHgudHlwZSkpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbeC50eXBlXSB8fCB7IGZlYXR1cmVzOiBbXSB9O1xyXG5cdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcclxuXHRcdFx0XHRcdGdyb3Vwc1t4LnR5cGVdID0gZ3JvdXA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0XHRyZXR1cm4gZ3JvdXBzO1xyXG5cdH1cclxuXHJcblxyXG59XHJcbiJdfQ==