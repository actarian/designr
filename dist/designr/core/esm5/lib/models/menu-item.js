var MenuItem = /** @class */ (function () {
    function MenuItem(options) {
        if (options) {
            Object.assign(this, options);
            if (options.items) {
                this.items = options.items.map(function (item) { return new MenuItem(item); });
            }
        }
    }
    return MenuItem;
}());
export { MenuItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0lBV0Msa0JBQVksT0FBYTtRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7YUFDM0Q7U0FDRDtJQUNGLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4vaW1hZ2UnO1xuXG5leHBvcnQgY2xhc3MgTWVudUl0ZW0gaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRhYnN0cmFjdD86IHN0cmluZztcblx0c2x1Zz86IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHRpdGVtcz86IE1lbnVJdGVtW107XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IGFueSkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0aWYgKG9wdGlvbnMuaXRlbXMpIHtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IG9wdGlvbnMuaXRlbXMubWFwKGl0ZW0gPT4gbmV3IE1lbnVJdGVtKGl0ZW0pKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==