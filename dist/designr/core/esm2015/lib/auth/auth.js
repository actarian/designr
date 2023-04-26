/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
export { AuthStrategy };
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
export class AuthToken {
    /**
     * @param {?} accessToken
     * @param {?=} expiresIn
     */
    constructor(accessToken, expiresIn = 0) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
}
if (false) {
    /** @type {?} */
    AuthToken.prototype.accessToken;
    /** @type {?} */
    AuthToken.prototype.expiresIn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVDLFNBQVU7SUFDVixTQUFVOzs7OztBQUdYLE1BQU0sT0FBTyxTQUFTOzs7OztJQUNyQixZQUNRLFdBQW1CLEVBQ25CLFlBQW9CLENBQUM7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUN6QixDQUFDO0NBQ0w7OztJQUhDLGdDQUEwQjs7SUFDMUIsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBlbnVtIEF1dGhTdHJhdGVneSB7XHJcblx0QmVhcmVyID0gMCxcclxuXHRDb29raWUgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aFRva2VuIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBhY2Nlc3NUb2tlbjogc3RyaW5nLFxyXG5cdFx0cHVibGljIGV4cGlyZXNJbjogbnVtYmVyID0gMFxyXG5cdCkgeyB9XHJcbn1cclxuIl19