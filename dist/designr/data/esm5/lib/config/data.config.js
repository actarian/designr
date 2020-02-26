import { InjectionToken } from '@angular/core';
export var DATA_CONFIG = new InjectionToken('data.config');
var DataConfig = /** @class */ (function () {
    function DataConfig(options) {
        this.datas = {};
        // console.log('DataConfig', options);
        if (options) {
            this.datas = options.datas || {};
        }
    }
    return DataConfig;
}());
export { DataConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9kYXRhLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMsQ0FBQztBQUl6RTtJQUlDLG9CQUFZLE9BQW9CO1FBSGhDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJbEIsc0NBQXNDO1FBQ3RDLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUNqQztJQUNGLENBQUM7SUFDRixpQkFBQztBQUFELENBQUMsQUFWRCxJQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lbW9yeUJhY2tlbmRDb25maWcgfSBmcm9tICcuLi9tZW1vcnkvbWVtb3J5JztcblxuZXhwb3J0IGNvbnN0IERBVEFfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPERhdGFDb25maWc+KCdkYXRhLmNvbmZpZycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFzIHsgW2tleTogc3RyaW5nXTogYW55W107IH1cblxuZXhwb3J0IGNsYXNzIERhdGFDb25maWcge1xuXHRkYXRhcz86IERhdGFzID0ge307XG5cdG1lbW9yeT86IE1lbW9yeUJhY2tlbmRDb25maWc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IERhdGFDb25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YUNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHR0aGlzLmRhdGFzID0gb3B0aW9ucy5kYXRhcyB8fCB7fTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==