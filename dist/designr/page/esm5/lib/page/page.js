var PageMeta = /** @class */ (function () {
    function PageMeta() {
    }
    return PageMeta;
}());
export { PageMeta };
var PageIndex = /** @class */ (function () {
    function PageIndex(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
    return PageIndex;
}());
export { PageIndex };
var PageRelation = /** @class */ (function () {
    function PageRelation() {
    }
    return PageRelation;
}());
export { PageRelation };
var Page = /** @class */ (function () {
    function Page(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                var related = options.related.map(function (x) {
                    // const item = new PageIndex(x.page);
                    var item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                });
                this.related = related;
            }
        }
    }
    Page.prototype.getFeature = function (id) {
        return this.features.find(function (x) { return x.id === id; }) || null;
    };
    Page.prototype.getFeatures = function (type, n) {
        return this.features ? this.features.filter(function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); }).sort(function (a, b) { return a.type - b.type; }) : [];
    };
    Page.prototype.getFeaturesByTypes = function (type) {
        return this.features ? this.features.filter(function (x) { return (type.indexOf(Number(x.type)) !== -1); }) : [];
    };
    Page.prototype.getGroupedFeaturesByTypes = function (type) {
        var _this = this;
        var groups = {};
        type.forEach(function (type) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0lBQUE7SUFVQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFWRCxJQVVDOztBQUVEO0lBWUMsbUJBQVksT0FBbUI7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7O0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUVEO0lBaUJDLGNBQVksT0FBYztRQVIxQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBU3BCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNwQixJQUFNLE9BQU8sR0FBZ0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFlO29CQUNoRSxzQ0FBc0M7b0JBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzNCLE9BQU8sSUFBSSxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO1NBQ0Q7SUFDRixDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFZLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFhLElBQVksRUFBRSxDQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBUyxJQUFLLE9BQUEsQ0FDdEUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQ2pELEVBRnNFLENBRXRFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBVSxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVELGlDQUFrQixHQUFsQixVQUFvQixJQUFjO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFVLElBQUssT0FBQSxDQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsRUFGMkQsQ0FFM0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsd0NBQXlCLEdBQXpCLFVBQTJCLElBQWM7UUFBekMsaUJBeUJDO1FBeEJBLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNoQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDL0MsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQVU7b0JBQ2hDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7d0JBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2QjtnQkFDRixDQUFDLENBQUMsQ0FBQzthQUNIO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNIOzs7Ozs7Ozs7O1VBVUU7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFHRixXQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50LCBGZWF0dXJlLCBJbWFnZSwgVGF4b25vbXkgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlcyB7IFtrZXk6IHN0cmluZ106IFR5cGU8UGFnZUNvbXBvbmVudD47IH1cblxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhIHtcblx0YXBwSWQ/OiBzdHJpbmc7XG5cdGF1dGhvcj86IHN0cmluZztcblx0Y2Fub25pY2FsPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0a2V5d29yZHM/OiBzdHJpbmc7XG5cdGxvY2FsZT86IHN0cmluZztcblx0cm9ib3RzPzogc3RyaW5nO1xuXHR0aXRsZT86IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VJbmRleCBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0c2x1Zz86IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRuYW1lPzogc3RyaW5nO1xuXHR0aXRsZT86IHN0cmluZztcblx0YWJzdHJhY3Q/OiBzdHJpbmc7XG5cdGltYWdlcz86IEltYWdlW107XG5cdGNvbXBvbmVudD86IG51bWJlciB8IHN0cmluZztcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcblx0cmVsYXRpb25UeXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlSW5kZXgpIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VSZWxhdGlvbiBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0cGFnZTogUGFnZTtcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2UgaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdGFic3RyYWN0Pzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0ZmVhdHVyZXM/OiBGZWF0dXJlW107XG5cdG1ldGE/OiBQYWdlTWV0YSA9IHt9O1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHRyZWxhdGVkPzogUGFnZUluZGV4W107XG5cdHRheG9ub21pZXM/OiBUYXhvbm9teVtdO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHRjb21wb25lbnQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cdGFjdGl2ZT86IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2UpIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHRcdGlmIChvcHRpb25zLnJlbGF0ZWQpIHtcblx0XHRcdFx0Y29uc3QgcmVsYXRlZDogUGFnZUluZGV4W10gPSBvcHRpb25zLnJlbGF0ZWQubWFwKCh4OiBQYWdlUmVsYXRpb24pID0+IHtcblx0XHRcdFx0XHQvLyBjb25zdCBpdGVtID0gbmV3IFBhZ2VJbmRleCh4LnBhZ2UpO1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBuZXcgUGFnZUluZGV4KHgpO1xuXHRcdFx0XHRcdGl0ZW0ucmVsYXRpb25UeXBlID0geC50eXBlO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5yZWxhdGVkID0gcmVsYXRlZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXRGZWF0dXJlPyhpZDogbnVtYmVyKTogRmVhdHVyZSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMuZmluZCh4ID0+IHguaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0Z2V0RmVhdHVyZXM/KHR5cGU6IG51bWJlciwgbjogbnVtYmVyW10pOiBGZWF0dXJlW10ge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUsIGk6IG51bWJlcikgPT4gKFxuXHRcdFx0bi5pbmRleE9mKE51bWJlcih4LmlkKSkgIT09IC0xICYmIHgudHlwZSA9PT0gdHlwZVxuXHRcdCkpLnNvcnQoKGE6IEZlYXR1cmUsIGI6IEZlYXR1cmUpID0+IGEudHlwZSAtIGIudHlwZSkgOiBbXTtcblx0fVxuXG5cdGdldEZlYXR1cmVzQnlUeXBlcz8odHlwZTogbnVtYmVyW10pOiBGZWF0dXJlW10ge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUpID0+IChcblx0XHRcdHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xXG5cdFx0KSkgOiBbXTtcblx0fVxuXG5cdGdldEdyb3VwZWRGZWF0dXJlc0J5VHlwZXM/KHR5cGU6IG51bWJlcltdKTogYW55IHtcblx0XHRjb25zdCBncm91cHMgPSB7fTtcblx0XHR0eXBlLmZvckVhY2godHlwZSA9PiB7XG5cdFx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1t0eXBlXSB8fCB7IGZlYXR1cmVzOiBbXSB9O1xuXHRcdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcblx0XHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKE51bWJlcih4LnR5cGUpID09PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRncm91cHNbdHlwZV0gPSBncm91cDtcblx0XHR9KTtcblx0XHQvKlxuXHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XG5cdFx0XHR0aGlzLmZlYXR1cmVzLmZvckVhY2goKHg6IEZlYXR1cmUpID0+IHtcblx0XHRcdFx0aWYgKHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbeC50eXBlXSB8fCB7IGZlYXR1cmVzOiBbXSB9O1xuXHRcdFx0XHRcdGdyb3VwLmZlYXR1cmVzLnB1c2goeCk7XG5cdFx0XHRcdFx0Z3JvdXBzW3gudHlwZV0gPSBncm91cDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdCovXG5cdFx0cmV0dXJuIGdyb3Vwcztcblx0fVxuXG5cbn1cbiJdfQ==