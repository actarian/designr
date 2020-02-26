import { Inject, Injectable } from '@angular/core';
import { EditorConfig, EDITOR_CONFIG } from './editor.config';
import * as i0 from "@angular/core";
import * as i1 from "./editor.config";
var EditorService = /** @class */ (function () {
    function EditorService(options) {
        // console.log('EditorService', options);
        options = options || {};
        this.options = new EditorConfig(options);
    }
    EditorService.ɵfac = function EditorService_Factory(t) { return new (t || EditorService)(i0.ɵɵinject(EDITOR_CONFIG)); };
    EditorService.ɵprov = i0.ɵɵdefineInjectable({ token: EditorService, factory: EditorService.ɵfac, providedIn: 'root' });
    return EditorService;
}());
export { EditorService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.EditorConfig, decorators: [{
                type: Inject,
                args: [EDITOR_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2VkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUU5RDtJQU9DLHVCQUN3QixPQUFxQjtRQUU1Qyx5Q0FBeUM7UUFDekMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzhFQVZXLGFBQWEsY0FLaEIsYUFBYTt5REFMVixhQUFhLFdBQWIsYUFBYSxtQkFGYixNQUFNO3dCQUxuQjtDQW1CQyxBQWZELElBZUM7U0FaWSxhQUFhO2tEQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFNRSxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi9lZGl0b3IuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IEVkaXRvckNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KEVESVRPUl9DT05GSUcpIG9wdGlvbnM6IEVkaXRvckNvbmZpZ1xuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBFZGl0b3JDb25maWcob3B0aW9ucyk7XG5cdH1cblxufVxuIl19