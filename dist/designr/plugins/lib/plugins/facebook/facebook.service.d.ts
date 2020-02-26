import { LocalStorageService, OnceService, RouteService, StorageService } from '@designr/core';
import { PageService } from '@designr/page';
import { Observable } from 'rxjs';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
export declare class FacebookConfig {
    appId: number;
    fields: string;
    scope: string;
    tokenClient: string;
    version: string;
}
export declare class FacebookAuthResponse {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userID: string;
}
export declare class FacebookPictureData {
    height: number;
    is_silhouette: boolean;
    url: string;
    width: number;
}
export declare class FacebookPicture {
    data: FacebookPictureData;
}
export declare class FacebookUser {
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    name: string;
    picture: FacebookPicture;
    authResponse?: FacebookAuthResponse;
    facebookToken?: string;
}
export declare class FacebookService {
    private platformId;
    private pluginsService;
    private storageService;
    private onceService;
    private routeService;
    private pageService;
    authResponse: FacebookAuthResponse;
    storage: StorageService;
    private options;
    private FB;
    constructor(platformId: string, pluginsService: PluginsService, storageService: LocalStorageService, onceService: OnceService, routeService: RouteService, pageService: PageService);
    init(): void;
    facebook(): Observable<any>;
    status(): Observable<unknown>;
    login(): Observable<unknown>;
    logout(): Observable<any>;
    getMe(fields?: string): Observable<FacebookUser>;
    static ɵfac: i0.ɵɵFactoryDef<FacebookService>;
    static ɵprov: i0.ɵɵInjectableDef<FacebookService>;
}
