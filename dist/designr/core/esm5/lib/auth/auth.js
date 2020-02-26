export var AuthStrategy;
(function (AuthStrategy) {
    AuthStrategy[AuthStrategy["Bearer"] = 0] = "Bearer";
    AuthStrategy[AuthStrategy["Cookie"] = 1] = "Cookie";
})(AuthStrategy || (AuthStrategy = {}));
var AuthToken = /** @class */ (function () {
    function AuthToken(accessToken, expiresIn) {
        if (expiresIn === void 0) { expiresIn = 0; }
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
    return AuthToken;
}());
export { AuthToken };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdkIsbURBQVUsQ0FBQTtJQUNWLG1EQUFVLENBQUE7QUFDWCxDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7QUFFRDtJQUNDLG1CQUNRLFdBQW1CLEVBQ25CLFNBQXFCO1FBQXJCLDBCQUFBLEVBQUEsYUFBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUN6QixDQUFDO0lBQ04sZ0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGVudW0gQXV0aFN0cmF0ZWd5IHtcblx0QmVhcmVyID0gMCxcblx0Q29va2llID0gMSxcbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhUb2tlbiB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBhY2Nlc3NUb2tlbjogc3RyaW5nLFxuXHRcdHB1YmxpYyBleHBpcmVzSW46IG51bWJlciA9IDBcblx0KSB7IH1cbn1cbiJdfQ==