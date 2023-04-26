/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Point = /** @class */ (function () {
    function Point() {
        this.top = 0;
        this.left = 0;
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
export { Point };
if (false) {
    /** @type {?} */
    Point.prototype.top;
    /** @type {?} */
    Point.prototype.left;
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
export function IRect() { }
if (false) {
    /** @type {?} */
    IRect.prototype.top;
    /** @type {?} */
    IRect.prototype.left;
    /** @type {?} */
    IRect.prototype.width;
    /** @type {?} */
    IRect.prototype.height;
}
var Rect = /** @class */ (function () {
    function Rect(rect) {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.right = 0;
        this.bottom = 0;
        this.center = new Point();
        this.set(rect);
    }
    /**
     * @param {?} rect
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    Rect.contains = /**
     * @param {?} rect
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (rect, left, top) {
        return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
    };
    /**
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */
    Rect.intersectRect = /**
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */
    function (r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    Rect.fromNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!node.getClientRects().length) {
            return new Rect();
        }
        /** @type {?} */
        var rect = node.getBoundingClientRect();
        // const defaultView = node.ownerDocument.defaultView;
        return new Rect({
            // top: rect.top + defaultView.pageYOffset,
            // left: rect.left + defaultView.pageXOffset,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
    };
    /**
     * @param {?} rect
     * @return {?}
     */
    Rect.prototype.set = /**
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        if (rect) {
            Object.assign(this, rect);
            this.right = this.left + this.width;
            this.bottom = this.top + this.height;
        }
        /** @type {?} */
        var y = this.top + this.height / 2;
        /** @type {?} */
        var x = this.left + this.width / 2;
        this.center = {
            left: x,
            top: y,
            x: x,
            y: y,
        };
    };
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    Rect.prototype.contains = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        return Rect.contains(this, left, top);
    };
    /**
     * @param {?} rect
     * @return {?}
     */
    Rect.prototype.intersect = /**
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        return Rect.intersectRect(this, rect);
    };
    /**
     * @param {?} rect
     * @return {?}
     */
    Rect.prototype.intersection = /**
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        /** @type {?} */
        var center = {
            x: (this.center.x - rect.center.x) / (rect.width / 2),
            y: (this.center.y - rect.center.y) / (rect.height / 2),
        };
        if (this.intersect(rect)) {
            /** @type {?} */
            var dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
            /** @type {?} */
            var dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
            /** @type {?} */
            var x = dx ? (1 - dx / this.width) : ((rect.left + rect.width) - this.left) / this.width;
            /** @type {?} */
            var y = dy ? (1 - dy / this.height) : ((rect.top + rect.height) - this.top) / this.height;
            x = Math.min(1, x);
            y = Math.min(1, y);
            return {
                x: x,
                y: y,
                center: center
            };
        }
        else {
            return { x: 0, y: 0, center: center };
        }
    };
    return Rect;
}());
export default Rect;
if (false) {
    /** @type {?} */
    Rect.prototype.top;
    /** @type {?} */
    Rect.prototype.left;
    /** @type {?} */
    Rect.prototype.width;
    /** @type {?} */
    Rect.prototype.height;
    /** @type {?} */
    Rect.prototype.right;
    /** @type {?} */
    Rect.prototype.bottom;
    /** @type {?} */
    Rect.prototype.center;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3JlY3QvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFBQTtRQUNDLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztJQUNmLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKQSxvQkFBZ0I7O0lBQ2hCLHFCQUFpQjs7SUFDakIsa0JBQWM7O0lBQ2Qsa0JBQWM7Ozs7O0FBR2YsMkJBS0M7OztJQUpBLG9CQUFZOztJQUNaLHFCQUFhOztJQUNiLHNCQUFjOztJQUNkLHVCQUFlOztBQUdoQjtJQVVDLGNBQVksSUFBWTtRQVJ4QixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBWSxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFZLENBQUMsQ0FBQztRQUNwQixXQUFNLEdBQVcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFTSxhQUFROzs7Ozs7SUFBZixVQUFnQixJQUFVLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDcEQsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFTSxrQkFBYTs7Ozs7SUFBcEIsVUFBcUIsRUFBUSxFQUFF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bkIsc0JBQW9COztJQUNwQixzQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuXHR0b3A6IG51bWJlciA9IDA7XHJcblx0bGVmdDogbnVtYmVyID0gMDtcclxuXHR4OiBudW1iZXIgPSAwO1xyXG5cdHk6IG51bWJlciA9IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlY3Qge1xyXG5cdHRvcDogbnVtYmVyO1xyXG5cdGxlZnQ6IG51bWJlcjtcclxuXHR3aWR0aDogbnVtYmVyO1xyXG5cdGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0IHtcclxuXHJcblx0dG9wOiBudW1iZXIgPSAwO1xyXG5cdGxlZnQ6IG51bWJlciA9IDA7XHJcblx0d2lkdGg6IG51bWJlciA9IDA7XHJcblx0aGVpZ2h0OiBudW1iZXIgPSAwO1xyXG5cdHJpZ2h0PzogbnVtYmVyID0gMDtcclxuXHRib3R0b20/OiBudW1iZXIgPSAwO1xyXG5cdGNlbnRlcj86IFBvaW50ID0gbmV3IFBvaW50KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHJlY3Q/OiBJUmVjdCkge1xyXG5cdFx0dGhpcy5zZXQocmVjdCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY29udGFpbnMocmVjdDogUmVjdCwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHJlY3QudG9wIDw9IHRvcCAmJiB0b3AgPD0gcmVjdC5ib3R0b20gJiYgcmVjdC5sZWZ0IDw9IGxlZnQgJiYgbGVmdCA8PSByZWN0LnJpZ2h0O1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGludGVyc2VjdFJlY3QocjE6IFJlY3QsIHIyOiBSZWN0KTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gIShyMi5sZWZ0ID4gcjEucmlnaHQgfHxcclxuXHRcdFx0cjIucmlnaHQgPCByMS5sZWZ0IHx8XHJcblx0XHRcdHIyLnRvcCA+IHIxLmJvdHRvbSB8fFxyXG5cdFx0XHRyMi5ib3R0b20gPCByMS50b3ApO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGZyb21Ob2RlKG5vZGU6IEhUTUxFbGVtZW50KTogUmVjdCB7XHJcblx0XHRpZiAoIW5vZGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0KCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdC8vIGNvbnN0IGRlZmF1bHRWaWV3ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0KHtcclxuXHRcdFx0Ly8gdG9wOiByZWN0LnRvcCArIGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0LFxyXG5cdFx0XHQvLyBsZWZ0OiByZWN0LmxlZnQgKyBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldCxcclxuXHRcdFx0dG9wOiByZWN0LnRvcCxcclxuXHRcdFx0bGVmdDogcmVjdC5sZWZ0LFxyXG5cdFx0XHR3aWR0aDogcmVjdC53aWR0aCxcclxuXHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodCxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2V0KHJlY3Q6IElSZWN0KSB7XHJcblx0XHRpZiAocmVjdCkge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHJlY3QpO1xyXG5cdFx0XHR0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcclxuXHRcdFx0dGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgeSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHQgLyAyO1xyXG5cdFx0Y29uc3QgeCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGggLyAyO1xyXG5cdFx0dGhpcy5jZW50ZXIgPSB7XHJcblx0XHRcdGxlZnQ6IHgsXHJcblx0XHRcdHRvcDogeSxcclxuXHRcdFx0eCxcclxuXHRcdFx0eSxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb250YWlucyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gUmVjdC5jb250YWlucyh0aGlzLCBsZWZ0LCB0b3ApO1xyXG5cdH1cclxuXHJcblx0aW50ZXJzZWN0KHJlY3Q6IFJlY3QpIHtcclxuXHRcdHJldHVybiBSZWN0LmludGVyc2VjdFJlY3QodGhpcywgcmVjdCk7XHJcblx0fVxyXG5cclxuXHRpbnRlcnNlY3Rpb24ocmVjdDogUmVjdCkge1xyXG5cdFx0Y29uc3QgY2VudGVyID0ge1xyXG5cdFx0XHR4OiAodGhpcy5jZW50ZXIueCAtIHJlY3QuY2VudGVyLngpIC8gKHJlY3Qud2lkdGggLyAyKSxcclxuXHRcdFx0eTogKHRoaXMuY2VudGVyLnkgLSByZWN0LmNlbnRlci55KSAvIChyZWN0LmhlaWdodCAvIDIpLFxyXG5cdFx0fTtcclxuXHRcdGlmICh0aGlzLmludGVyc2VjdChyZWN0KSkge1xyXG5cdFx0XHRjb25zdCBkeCA9IHRoaXMubGVmdCA+IHJlY3QubGVmdCA/IDAgOiBNYXRoLmFicyhyZWN0LmxlZnQgLSB0aGlzLmxlZnQpO1xyXG5cdFx0XHRjb25zdCBkeSA9IHRoaXMudG9wID4gcmVjdC50b3AgPyAwIDogTWF0aC5hYnMocmVjdC50b3AgLSB0aGlzLnRvcCk7XHJcblx0XHRcdGxldCB4ID0gZHggPyAoMSAtIGR4IC8gdGhpcy53aWR0aCkgOiAoKHJlY3QubGVmdCArIHJlY3Qud2lkdGgpIC0gdGhpcy5sZWZ0KSAvIHRoaXMud2lkdGg7XHJcblx0XHRcdGxldCB5ID0gZHkgPyAoMSAtIGR5IC8gdGhpcy5oZWlnaHQpIDogKChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0KSAtIHRoaXMudG9wKSAvIHRoaXMuaGVpZ2h0O1xyXG5cdFx0XHR4ID0gTWF0aC5taW4oMSwgeCk7XHJcblx0XHRcdHkgPSBNYXRoLm1pbigxLCB5KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR4OiB4LFxyXG5cdFx0XHRcdHk6IHksXHJcblx0XHRcdFx0Y2VudGVyOiBjZW50ZXJcclxuXHRcdFx0fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB7IHg6IDAsIHk6IDAsIGNlbnRlcjogY2VudGVyIH07XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=