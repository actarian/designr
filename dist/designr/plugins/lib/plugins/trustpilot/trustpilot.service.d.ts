import { OnceService } from '@designr/core';
import { Observable } from 'rxjs';
import { PluginsService } from '../../config/plugins.service';
export declare class TrustPilotConfig {
    businessunitId: string;
    businessunitName: string;
}
export declare class TrustPilotService {
    private platformId;
    private pluginsService;
    private onceService;
    options: TrustPilotConfig;
    private Trustpilot;
    private Trustpilot$;
    constructor(platformId: string, pluginsService: PluginsService, onceService: OnceService);
    private init;
    once(): Observable<any>;
}
