import { LocalStorageService, OnceService, StorageService } from '@designr/core';
import { Observable } from 'rxjs';
import { PluginsService } from '../../config/plugins.service';
export declare class GoogleConfig {
    clientId: string;
    cookiepolicy?: string;
    scope?: string;
    fetch_basic_profile?: boolean;
    ux_mode?: string;
}
export declare class GoogleAuthResponse {
    token_type: string;
    access_token: string;
    scope: string;
    login_hint: string;
    expires_in: number;
    expires_at: number;
    first_issued_at: number;
    id_token: string;
    idpId: string;
    signedRequest: string;
    userID: string;
}
export declare class GoogleUser {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    name: string;
    picture: string;
    authResponse?: GoogleAuthResponse;
    googleToken?: string;
}
export declare class GoogleService {
    private platformId;
    private pluginsService;
    private storageService;
    private onceService;
    authResponse: GoogleAuthResponse;
    storage: StorageService;
    private options;
    private gapi;
    private auth2;
    private instance;
    constructor(platformId: string, pluginsService: PluginsService, storageService: LocalStorageService, onceService: OnceService);
    init(): void;
    private google;
    getMe(): Observable<GoogleUser>;
    login(): Observable<{}>;
    logout(): Observable<{}>;
    private once;
    private getAuth2;
    private signin;
    private auth2init;
    auth2Instance(): Observable<any>;
}
