import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import { STATUS_CODE } from '../memory/status-codes';
import * as i0 from "@angular/core";
import * as i1 from "../config/data.config";
var DataService = /** @class */ (function () {
    function DataService(config
    // @Inject(forwardRef(() => DataService)) public dataService: DataService
    // private dataService: DataService,
    ) {
        // console.log('DataService', config);
        config = config || {};
        this.config = new DataConfig(config);
    }
    DataService.prototype.createDb = function () {
        // console.log('DataService.createDb', this.config.datas);
        return this.config.datas || {};
    };
    DataService.prototype.parseRequestUrl = function (url, service) {
        // !!! REMAPPING
        /*
        if (this.dataService.config.memory && this.dataService.config.memory.remap) {
            Object.keys(this.dataService.config.memory.remap).forEach((k: string) => {
                url = url.replace(k, this.dataService.config.memory.remap[k]);
            });
        }
        */
        var parsed = service.parseRequestUrl(url);
        return parsed;
    };
    DataService.prototype.requestInterceptor = function (request, service) {
        // console.log('requestInterceptor', request);
        var body;
        if (request.method === 'post') {
            switch (request.collectionName) {
                case 'slug':
                    var mnemonics = request.body;
                    body = request.body.map(function (x) { return request.collection.find(function (c) { return c.mnemonic === x; }) || null; }).filter(function (x) { return x; });
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
                case 'label':
                    var ids = request.body.map(function (x) { return x.id; });
                    body = request.body.map(function (x) { return request.collection.find(function (c) { return c.id === x.id; }) || x; });
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
            }
        }
        return null;
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(DATA_CONFIG)); };
    DataService.ɵprov = i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
    return DataService;
}());
export { DataService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.DataConfig, decorators: [{
                type: Inject,
                args: [DATA_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFckQ7SUFPQyxxQkFDc0IsTUFBa0I7SUFDdkMseUVBQXlFO0lBQ3pFLG9DQUFvQzs7UUFFcEMsc0NBQXNDO1FBQ3RDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDQywwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLE9BQU87UUFDbkMsZ0JBQWdCO1FBQ2hCOzs7Ozs7VUFNRTtRQUNGLElBQU0sTUFBTSxHQUFxQixPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixPQUFzQixFQUFFLE9BQXVCO1FBQ2pFLDhDQUE4QztRQUM5QyxJQUFJLElBQVMsQ0FBQztRQUNkLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDOUIsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFO2dCQUMvQixLQUFLLE1BQU07b0JBQ1YsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDL0IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxJQUFJLElBQUksRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztvQkFDcEcscUJBQXFCO29CQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEYsTUFBTTtnQkFDUCxLQUFLLE9BQU87b0JBQ1gsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksQ0FBQyxDQUFDO29CQUN4QyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBYixDQUFhLENBQUMsSUFBSSxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztvQkFDL0UscUJBQXFCO29CQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEYsTUFBTTthQUNQO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7MEVBcERXLFdBQVcsY0FLZCxXQUFXO3VEQUxSLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBUG5CO0NBc0VDLEFBaEVELElBZ0VDO1NBN0RZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQU1FLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvZGF0YS5jb25maWcnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlSZXF1ZXN0LCBNZW1vcnlSZXNwb25zZSwgUGFyc2VkUmVxdWVzdFVybCB9IGZyb20gJy4uL21lbW9yeS9tZW1vcnknO1xuaW1wb3J0IHsgU1RBVFVTX0NPREUgfSBmcm9tICcuLi9tZW1vcnkvc3RhdHVzLWNvZGVzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIGltcGxlbWVudHMgTWVtb3J5RGF0YVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBjb25maWc6IERhdGFDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChEQVRBX0NPTkZJRykgY29uZmlnOiBEYXRhQ29uZmlnXG5cdFx0Ly8gQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFTZXJ2aWNlKSkgcHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxuXHRcdC8vIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UnLCBjb25maWcpO1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHR0aGlzLmNvbmZpZyA9IG5ldyBEYXRhQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRjcmVhdGVEYigpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UuY3JlYXRlRGInLCB0aGlzLmNvbmZpZy5kYXRhcyk7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRhdGFzIHx8IHt9O1xuXHR9XG5cblx0cGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nLCBzZXJ2aWNlKTogUGFyc2VkUmVxdWVzdFVybCB7XG5cdFx0Ly8gISEhIFJFTUFQUElOR1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeSAmJiB0aGlzLmRhdGFTZXJ2aWNlLmNvbmZpZy5tZW1vcnkucmVtYXApIHtcblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcCkuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKGssIHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcFtrXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ki9cblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSBzZXJ2aWNlLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH1cblxuXHRyZXF1ZXN0SW50ZXJjZXB0b3IocmVxdWVzdDogTWVtb3J5UmVxdWVzdCwgc2VydmljZTogQmFja2VuZFNlcnZpY2UpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ3JlcXVlc3RJbnRlcmNlcHRvcicsIHJlcXVlc3QpO1xuXHRcdGxldCBib2R5OiBhbnk7XG5cdFx0aWYgKHJlcXVlc3QubWV0aG9kID09PSAncG9zdCcpIHtcblx0XHRcdHN3aXRjaCAocmVxdWVzdC5jb2xsZWN0aW9uTmFtZSkge1xuXHRcdFx0XHRjYXNlICdzbHVnJzpcblx0XHRcdFx0XHRjb25zdCBtbmVtb25pY3MgPSByZXF1ZXN0LmJvZHk7XG5cdFx0XHRcdFx0Ym9keSA9IHJlcXVlc3QuYm9keS5tYXAoeCA9PiByZXF1ZXN0LmNvbGxlY3Rpb24uZmluZChjID0+IGMubW5lbW9uaWMgPT09IHgpIHx8IG51bGwpLmZpbHRlcih4ID0+IHgpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXHRcdFx0XHRcdHJldHVybiB7IGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycywgYm9keTogc2VydmljZS5ib2RpZnkoYm9keSksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbGFiZWwnOlxuXHRcdFx0XHRcdGNvbnN0IGlkcyA9IHJlcXVlc3QuYm9keS5tYXAoeCA9PiB4LmlkKTtcblx0XHRcdFx0XHRib2R5ID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHJlcXVlc3QuY29sbGVjdGlvbi5maW5kKGMgPT4gYy5pZCA9PT0geC5pZCkgfHwgeCk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLCBib2R5OiBzZXJ2aWNlLmJvZGlmeShib2R5KSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qXG5cdHJlc3BvbnNlSW50ZXJjZXB0b3IocmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlLCByZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdGNvbnNvbGUubG9nKCdyZXNwb25zZUludGVyY2VwdG9yJywgcmVzcG9uc2UsIHJlcXVlc3QpO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fVxuXHQqL1xuXG59XG4iXX0=