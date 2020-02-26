import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class StaticGuard implements CanActivate, CanDeactivate<any> {
    private match;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    static ɵfac: i0.ɵɵFactoryDef<StaticGuard>;
    static ɵprov: i0.ɵɵInjectableDef<StaticGuard>;
}
