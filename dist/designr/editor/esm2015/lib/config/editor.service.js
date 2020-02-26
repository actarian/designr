import { Inject, Injectable } from '@angular/core';
import { EditorConfig, EDITOR_CONFIG } from './editor.config';
import * as i0 from "@angular/core";
import * as i1 from "./editor.config";
export class EditorService {
    constructor(options) {
        // console.log('EditorService', options);
        options = options || {};
        this.options = new EditorConfig(options);
    }
}
EditorService.ɵfac = function EditorService_Factory(t) { return new (t || EditorService)(i0.ɵɵinject(EDITOR_CONFIG)); };
EditorService.ɵprov = i0.ɵɵdefineInjectable({ token: EditorService, factory: EditorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.EditorConfig, decorators: [{
                type: Inject,
                args: [EDITOR_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2VkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUs5RCxNQUFNLE9BQU8sYUFBYTtJQUl6QixZQUN3QixPQUFxQjtRQUU1Qyx5Q0FBeUM7UUFDekMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzswRUFWVyxhQUFhLGNBS2hCLGFBQWE7cURBTFYsYUFBYSxXQUFiLGFBQWEsbUJBRmIsTUFBTTtrREFFTixhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBTUUsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRvckNvbmZpZywgRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vZWRpdG9yLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvclNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBFZGl0b3JDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChFRElUT1JfQ09ORklHKSBvcHRpb25zOiBFZGl0b3JDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvclNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgRWRpdG9yQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cbn1cbiJdfQ==