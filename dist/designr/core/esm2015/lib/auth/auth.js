export var AuthStrategy;
(function (AuthStrategy) {
    AuthStrategy[AuthStrategy["Bearer"] = 0] = "Bearer";
    AuthStrategy[AuthStrategy["Cookie"] = 1] = "Cookie";
})(AuthStrategy || (AuthStrategy = {}));
export class AuthToken {
    constructor(accessToken, expiresIn = 0) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdkIsbURBQVUsQ0FBQTtJQUNWLG1EQUFVLENBQUE7QUFDWCxDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7QUFFRCxNQUFNLE9BQU8sU0FBUztJQUNyQixZQUNRLFdBQW1CLEVBQ25CLFlBQW9CLENBQUM7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUN6QixDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBlbnVtIEF1dGhTdHJhdGVneSB7XG5cdEJlYXJlciA9IDAsXG5cdENvb2tpZSA9IDEsXG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoVG9rZW4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZyxcblx0XHRwdWJsaWMgZXhwaXJlc0luOiBudW1iZXIgPSAwXG5cdCkgeyB9XG59XG4iXX0=