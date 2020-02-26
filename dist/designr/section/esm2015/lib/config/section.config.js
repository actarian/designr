import { InjectionToken } from '@angular/core';
export class SectionConfig {
    constructor(options) {
        this.sections = {};
        // console.log('SectionConfig', options);
        if (options) {
            Object.assign(this, options);
            this.sections = options.sections || {};
        }
    }
}
export const SECTION_CONFIG = new InjectionToken('section.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9zZWN0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9zZWN0aW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLE1BQU0sT0FBTyxhQUFhO0lBR3pCLFlBQVksT0FBdUI7UUFGbkMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUd4Qix5Q0FBeUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQztDQUNEO0FBRUQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFnQixnQkFBZ0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb25zIH0gZnJvbSAnLi4vc2VjdGlvbi9zZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Db25maWcge1xuXHRzZWN0aW9ucz86IFNlY3Rpb25zID0ge307XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFNlY3Rpb25Db25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnU2VjdGlvbkNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IG9wdGlvbnMuc2VjdGlvbnMgfHwge307XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBTRUNUSU9OX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTZWN0aW9uQ29uZmlnPignc2VjdGlvbi5jb25maWcnKTtcbiJdfQ==