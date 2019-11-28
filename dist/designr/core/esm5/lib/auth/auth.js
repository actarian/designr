/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
export { AuthStrategy };
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
var AuthToken = /** @class */ (function () {
    function AuthToken(accessToken, expiresIn) {
        if (expiresIn === void 0) { expiresIn = 0; }
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
    return AuthToken;
}());
export { AuthToken };
if (false) {
    /** @type {?} */
    AuthToken.prototype.accessToken;
    /** @type {?} */
    AuthToken.prototype.expiresIn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVDLFNBQVU7SUFDVixTQUFVOzs7OztBQUdYO0lBQ0MsbUJBQ1EsV0FBbUIsRUFDbkIsU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxhQUFxQjtRQURyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFZO0lBQ3pCLENBQUM7SUFDTixnQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSEMsZ0NBQTBCOztJQUMxQiw4QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBlbnVtIEF1dGhTdHJhdGVneSB7XG5cdEJlYXJlciA9IDAsXG5cdENvb2tpZSA9IDEsXG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoVG9rZW4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZyxcblx0XHRwdWJsaWMgZXhwaXJlc0luOiBudW1iZXIgPSAwXG5cdCkgeyB9XG59XG4iXX0=