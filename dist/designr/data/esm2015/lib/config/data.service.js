import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import { STATUS_CODE } from '../memory/status-codes';
import * as i0 from "@angular/core";
import * as i1 from "../config/data.config";
export class DataService {
    constructor(config
    // @Inject(forwardRef(() => DataService)) public dataService: DataService
    // private dataService: DataService,
    ) {
        // console.log('DataService', config);
        config = config || {};
        this.config = new DataConfig(config);
    }
    createDb() {
        // console.log('DataService.createDb', this.config.datas);
        return this.config.datas || {};
    }
    parseRequestUrl(url, service) {
        // !!! REMAPPING
        /*
        if (this.dataService.config.memory && this.dataService.config.memory.remap) {
            Object.keys(this.dataService.config.memory.remap).forEach((k: string) => {
                url = url.replace(k, this.dataService.config.memory.remap[k]);
            });
        }
        */
        const parsed = service.parseRequestUrl(url);
        return parsed;
    }
    requestInterceptor(request, service) {
        // console.log('requestInterceptor', request);
        let body;
        if (request.method === 'post') {
            switch (request.collectionName) {
                case 'slug':
                    const mnemonics = request.body;
                    body = request.body.map(x => request.collection.find(c => c.mnemonic === x) || null).filter(x => x);
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
                case 'label':
                    const ids = request.body.map(x => x.id);
                    body = request.body.map(x => request.collection.find(c => c.id === x.id) || x);
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
            }
        }
        return null;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(DATA_CONFIG)); };
DataService.ɵprov = i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.DataConfig, decorators: [{
                type: Inject,
                args: [DATA_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLckQsTUFBTSxPQUFPLFdBQVc7SUFJdkIsWUFDc0IsTUFBa0I7SUFDdkMseUVBQXlFO0lBQ3pFLG9DQUFvQzs7UUFFcEMsc0NBQXNDO1FBQ3RDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVE7UUFDUCwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxHQUFXLEVBQUUsT0FBTztRQUNuQyxnQkFBZ0I7UUFDaEI7Ozs7OztVQU1FO1FBQ0YsTUFBTSxNQUFNLEdBQXFCLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRUQsa0JBQWtCLENBQUMsT0FBc0IsRUFBRSxPQUF1QjtRQUNqRSw4Q0FBOEM7UUFDOUMsSUFBSSxJQUFTLENBQUM7UUFDZCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzlCLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDL0IsS0FBSyxNQUFNO29CQUNWLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQy9CLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEcscUJBQXFCO29CQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEYsTUFBTTtnQkFDUCxLQUFLLE9BQU87b0JBQ1gsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3hDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQy9FLHFCQUFxQjtvQkFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hGLE1BQU07YUFDUDtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOztzRUFwRFcsV0FBVyxjQUtkLFdBQVc7bURBTFIsV0FBVyxXQUFYLFdBQVcsbUJBRlgsTUFBTTtrREFFTixXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBTUUsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhQ29uZmlnLCBEQVRBX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9kYXRhLmNvbmZpZyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uL21lbW9yeS9iYWNrZW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVtb3J5RGF0YVNlcnZpY2UsIE1lbW9yeVJlcXVlc3QsIE1lbW9yeVJlc3BvbnNlLCBQYXJzZWRSZXF1ZXN0VXJsIH0gZnJvbSAnLi4vbWVtb3J5L21lbW9yeSc7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERSB9IGZyb20gJy4uL21lbW9yeS9zdGF0dXMtY29kZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBNZW1vcnlEYXRhU2VydmljZSB7XG5cblx0cHVibGljIGNvbmZpZzogRGF0YUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KERBVEFfQ09ORklHKSBjb25maWc6IERhdGFDb25maWdcblx0XHQvLyBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVNlcnZpY2UpKSBwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlXG5cdFx0Ly8gcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdEYXRhU2VydmljZScsIGNvbmZpZyk7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdHRoaXMuY29uZmlnID0gbmV3IERhdGFDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdGNyZWF0ZURiKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdEYXRhU2VydmljZS5jcmVhdGVEYicsIHRoaXMuY29uZmlnLmRhdGFzKTtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGF0YXMgfHwge307XG5cdH1cblxuXHRwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHNlcnZpY2UpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcblx0XHQvLyAhISEgUkVNQVBQSU5HXG5cdFx0Lypcblx0XHRpZiAodGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5ICYmIHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcCkge1xuXHRcdFx0T2JqZWN0LmtleXModGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5LnJlbWFwKS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoaywgdGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5LnJlbWFwW2tdKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQqL1xuXHRcdGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IHNlcnZpY2UucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG5cdFx0cmV0dXJuIHBhcnNlZDtcblx0fVxuXG5cdHJlcXVlc3RJbnRlcmNlcHRvcihyZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0LCBzZXJ2aWNlOiBCYWNrZW5kU2VydmljZSk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHQvLyBjb25zb2xlLmxvZygncmVxdWVzdEludGVyY2VwdG9yJywgcmVxdWVzdCk7XG5cdFx0bGV0IGJvZHk6IGFueTtcblx0XHRpZiAocmVxdWVzdC5tZXRob2QgPT09ICdwb3N0Jykge1xuXHRcdFx0c3dpdGNoIChyZXF1ZXN0LmNvbGxlY3Rpb25OYW1lKSB7XG5cdFx0XHRcdGNhc2UgJ3NsdWcnOlxuXHRcdFx0XHRcdGNvbnN0IG1uZW1vbmljcyA9IHJlcXVlc3QuYm9keTtcblx0XHRcdFx0XHRib2R5ID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHJlcXVlc3QuY29sbGVjdGlvbi5maW5kKGMgPT4gYy5tbmVtb25pYyA9PT0geCkgfHwgbnVsbCkuZmlsdGVyKHggPT4geCk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLCBib2R5OiBzZXJ2aWNlLmJvZGlmeShib2R5KSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdsYWJlbCc6XG5cdFx0XHRcdFx0Y29uc3QgaWRzID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHguaWQpO1xuXHRcdFx0XHRcdGJvZHkgPSByZXF1ZXN0LmJvZHkubWFwKHggPT4gcmVxdWVzdC5jb2xsZWN0aW9uLmZpbmQoYyA9PiBjLmlkID09PSB4LmlkKSB8fCB4KTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtKTtcblx0XHRcdFx0XHRyZXR1cm4geyBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMsIGJvZHk6IHNlcnZpY2UuYm9kaWZ5KGJvZHkpLCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Lypcblx0cmVzcG9uc2VJbnRlcmNlcHRvcihyZXNwb25zZTogTWVtb3J5UmVzcG9uc2UsIHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Y29uc29sZS5sb2coJ3Jlc3BvbnNlSW50ZXJjZXB0b3InLCByZXNwb25zZSwgcmVxdWVzdCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9XG5cdCovXG5cbn1cbiJdfQ==