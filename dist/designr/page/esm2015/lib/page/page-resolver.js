import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';
export class PageResolver {
    constructor(configService, page) {
        this.configService = configService;
        this.page = page;
        this.component = PageComponent;
        if (page && this.configService.options.pages) {
            this.component = this.configService.options.pages[page.component] || this.configService.options.defaultPage;
        }
        else {
            this.component = this.configService.options.notFoundPage || PageNotFoundComponent;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxNQUFNLE9BQU8sWUFBWTtJQUl4QixZQUNTLGFBQTRCLEVBQzdCLElBQVU7UUFEVCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSlgsY0FBUyxHQUF3QixhQUFhLENBQUM7UUFNckQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDNUc7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLHFCQUFxQixDQUFDO1NBQ2xGO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFBhZ2VSZXNvbHZlciB7XG5cblx0cHVibGljIGNvbXBvbmVudDogVHlwZTxQYWdlQ29tcG9uZW50PiA9IFBhZ2VDb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHB1YmxpYyBwYWdlOiBQYWdlLFxuXHQpIHtcblx0XHRpZiAocGFnZSAmJiB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wYWdlcykge1xuXHRcdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wYWdlc1twYWdlLmNvbXBvbmVudF0gfHwgdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdFBhZ2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMubm90Rm91bmRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudDtcblx0XHR9XG5cdH1cblxufVxuIl19