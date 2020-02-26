import { InjectionToken } from '@angular/core';
export var EDITOR_CONFIG = new InjectionToken('editor.config');
var EditorConfig = /** @class */ (function () {
    function EditorConfig(options) {
        // console.log('EditorConfig', options);
        if (options) {
            this.enabled = options.enabled || false;
        }
    }
    return EditorConfig;
}());
export { EditorConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZWRpdG9yLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBZSxlQUFlLENBQUMsQ0FBQztBQUUvRTtJQUdDLHNCQUFZLE9BQXNCO1FBQ2pDLHdDQUF3QztRQUN4QyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7U0FDeEM7SUFDRixDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBFRElUT1JfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEVkaXRvckNvbmZpZz4oJ2VkaXRvci5jb25maWcnKTtcblxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbmZpZyB7XG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBFZGl0b3JDb25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IG9wdGlvbnMuZW5hYmxlZCB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuIl19