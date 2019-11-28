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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVDLFNBQVU7SUFDVixTQUFVOzs7OztBQUdYLE1BQU0sT0FBTyxTQUFTOzs7OztJQUNyQixZQUNRLFdBQW1CLEVBQ25CLFlBQW9CLENBQUM7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUN6QixDQUFDO0NBQ0w7OztJQUhDLGdDQUEwQjs7SUFDMUIsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZW51bSBBdXRoU3RyYXRlZ3kge1xuXHRCZWFyZXIgPSAwLFxuXHRDb29raWUgPSAxLFxufVxuXG5leHBvcnQgY2xhc3MgQXV0aFRva2VuIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmcsXG5cdFx0cHVibGljIGV4cGlyZXNJbjogbnVtYmVyID0gMFxuXHQpIHsgfVxufVxuIl19