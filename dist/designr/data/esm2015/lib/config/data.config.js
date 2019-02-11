/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const DATA_CONFIG = new InjectionToken('data.config');
export class DataConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.datas = {};
        console.log('DataConfig', options);
        if (options) {
            this.datas = options.datas || {};
        }
    }
}
if (false) {
    /** @type {?} */
    DataConfig.prototype.datas;
    /** @type {?} */
    DataConfig.prototype.memory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9kYXRhLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJL0MsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUM7QUFFeEUsTUFBTSxPQUFPLFVBQVU7Ozs7SUFJdEIsWUFBWSxPQUFvQjtRQUhoQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBSWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUNqQztJQUNGLENBQUM7Q0FDRDs7O0lBVEEsMkJBQW1COztJQUNuQiw0QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuaW1wb3J0IHsgRGF0YXMgfSBmcm9tICcuLi9kYXRhL2RhdGFzJztcblxuZXhwb3J0IGNvbnN0IERBVEFfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPERhdGFDb25maWc+KCdkYXRhLmNvbmZpZycpO1xuXG5leHBvcnQgY2xhc3MgRGF0YUNvbmZpZyB7XG5cdGRhdGFzPzogRGF0YXMgPSB7fTtcblx0bWVtb3J5PzogSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogRGF0YUNvbmZpZykge1xuXHRcdGNvbnNvbGUubG9nKCdEYXRhQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuZGF0YXMgPSBvcHRpb25zLmRhdGFzIHx8IHt9O1xuXHRcdH1cblx0fVxufVxuIl19