/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of core
 */
export { AuthService, AuthStrategy, AuthToken } from './lib/auth/auth.service';
export { CoreConfig, CORE_CONFIG } from './lib/config/core.config';
export { CoreService } from './lib/config/core.service';
export { DefaultContentDirective } from './lib/content/default-content.directive';
export { CoreModuleComponent } from './lib/core-module.component';
export { CoreModule } from './lib/core.module';
export { DisposableComponent } from './lib/disposable/disposable.component';
export { HighlightPipe } from './lib/highlight/highlight.pipe';
export { HttpResponseInterceptor } from './lib/http/http-response.interceptor';
export { HttpStatusCodeService } from './lib/http/http-status-code.service';
export { JsonFormatterComponent } from './lib/json-formatter/json-formatter.component';
export { Label } from './lib/label/label';
export { LabelDirective } from './lib/label/label.directive';
export { LabelPipe } from './lib/label/label.pipe';
export { LabelService } from './lib/label/label.service';
export { Logger } from './lib/logger/logger';
export { LoggerComponent } from './lib/logger/logger.component';
export { Document, DocumentIndex } from './lib/models/document';
export { DocumentService } from './lib/models/document.service';
export { Entity } from './lib/models/entity';
export { EntityService } from './lib/models/entity.service';
export { EventDispatcherService } from './lib/models/event-dispatcher.service';
export { Feature } from './lib/models/feature';
export { Identity } from './lib/models/identity';
export { IdentityService } from './lib/models/identity.service';
export { Image, ImageType } from './lib/models/image';
export { MenuItem } from './lib/models/menu-item';
export { MenuService } from './lib/models/menu.service';
export { Taxonomy } from './lib/models/taxonomy';
export { OnceService } from './lib/once/once.service';
export { AssetPipe } from './lib/pipes/asset.pipe';
export { CustomAsyncPipe } from './lib/pipes/custom-async.pipe';
export { ImageUrlPipe } from './lib/pipes/image-url.pipe';
export { ImagePipe } from './lib/pipes/image.pipe';
export { PublicPipe } from './lib/pipes/public.pipe';
export { SegmentPipe } from './lib/pipes/segment.pipe';
export { RoutePipe } from './lib/route/route.pipe';
export { RouteService } from './lib/route/route.service';
export { SlugAsyncPipe } from './lib/slug/slug-async.pipe';
export { SlugPipe } from './lib/slug/slug.pipe';
export { SlugService } from './lib/slug/slug.service';
export { CookieStorageService, LocalStorageService, SessionStorageService, StorageService } from './lib/storage/storage.service';
export { Translate } from './lib/translate/translate';
export { TranslateDirective } from './lib/translate/translate.directive';
export { TranslatePipe } from './lib/translate/translate.pipe';
export { TranslateService } from './lib/translate/translate.service';
export { SafeStylePipe } from './lib/trust/safe-style.pipe';
export { SafeUrlPipe } from './lib/trust/safe-url.pipe';
export { TrustPipe } from './lib/trust/trust.pipe';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2YgY29yZVxuICovXG5cbmV4cG9ydCB7IEF1dGhTZXJ2aWNlLCBBdXRoU3RyYXRlZ3ksIEF1dGhUb2tlbiB9IGZyb20gJy4vbGliL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCB7IENvcmVDb25maWcsIENPUkVfQ09ORklHIH0gZnJvbSAnLi9saWIvY29uZmlnL2NvcmUuY29uZmlnJztcbmV4cG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi9saWIvY29uZmlnL2NvcmUuc2VydmljZSc7XG5leHBvcnQgeyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vbGliL2NvbnRlbnQvZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBDb3JlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvY29yZS1tb2R1bGUuY29tcG9uZW50JztcbmV4cG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2xpYi9jb3JlLm1vZHVsZSc7XG5leHBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5leHBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9saWIvaGlnaGxpZ2h0L2hpZ2hsaWdodC5waXBlJztcbmV4cG9ydCB7IEh0dHBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSAnLi9saWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yJztcbmV4cG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4vbGliL2h0dHAvaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlJztcbmV4cG9ydCB7IEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2xpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xuZXhwb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xpYi9sYWJlbC9sYWJlbCc7XG5leHBvcnQgeyBMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGliL2xhYmVsL2xhYmVsLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBMYWJlbFBpcGUgfSBmcm9tICcuL2xpYi9sYWJlbC9sYWJlbC5waXBlJztcbmV4cG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGliL2xhYmVsL2xhYmVsLnNlcnZpY2UnO1xuZXhwb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9saWIvbG9nZ2VyL2xvZ2dlcic7XG5leHBvcnQgeyBMb2dnZXJDb21wb25lbnQgfSBmcm9tICcuL2xpYi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudCc7XG5leHBvcnQgeyBEb2N1bWVudCwgRG9jdW1lbnRJbmRleCB9IGZyb20gJy4vbGliL21vZGVscy9kb2N1bWVudCc7XG5leHBvcnQgeyBEb2N1bWVudFNlcnZpY2UgfSBmcm9tICcuL2xpYi9tb2RlbHMvZG9jdW1lbnQuc2VydmljZSc7XG5leHBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2xpYi9tb2RlbHMvZW50aXR5JztcbmV4cG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2xpYi9tb2RlbHMvZW50aXR5LnNlcnZpY2UnO1xuZXhwb3J0IHsgRXZlbnREaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4vbGliL21vZGVscy9ldmVudC1kaXNwYXRjaGVyLnNlcnZpY2UnO1xuZXhwb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4vbGliL21vZGVscy9mZWF0dXJlJztcbmV4cG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi9saWIvbW9kZWxzL2lkZW50aXR5JztcbmV4cG9ydCB7IElkZW50aXR5U2VydmljZSB9IGZyb20gJy4vbGliL21vZGVscy9pZGVudGl0eS5zZXJ2aWNlJztcbmV4cG9ydCB7IEltYWdlLCBJbWFnZVR5cGUgfSBmcm9tICcuL2xpYi9tb2RlbHMvaW1hZ2UnO1xuZXhwb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuL2xpYi9tb2RlbHMvbWVudS1pdGVtJztcbmV4cG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9saWIvbW9kZWxzL21lbnUuc2VydmljZSc7XG5leHBvcnQgeyBUYXhvbm9teSB9IGZyb20gJy4vbGliL21vZGVscy90YXhvbm9teSc7XG5leHBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4vbGliL29uY2Uvb25jZS5zZXJ2aWNlJztcbmV4cG9ydCB7IEFzc2V0UGlwZSB9IGZyb20gJy4vbGliL3BpcGVzL2Fzc2V0LnBpcGUnO1xuZXhwb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi9saWIvcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xuZXhwb3J0IHsgSW1hZ2VVcmxQaXBlIH0gZnJvbSAnLi9saWIvcGlwZXMvaW1hZ2UtdXJsLnBpcGUnO1xuZXhwb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi9saWIvcGlwZXMvaW1hZ2UucGlwZSc7XG5leHBvcnQgeyBQdWJsaWNQaXBlIH0gZnJvbSAnLi9saWIvcGlwZXMvcHVibGljLnBpcGUnO1xuZXhwb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL2xpYi9waXBlcy9zZWdtZW50LnBpcGUnO1xuZXhwb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi9saWIvcm91dGUvcm91dGUucGlwZSc7XG5leHBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuL2xpYi9yb3V0ZS9yb3V0ZS5zZXJ2aWNlJztcbmV4cG9ydCB7IFNsdWdBc3luY1BpcGUgfSBmcm9tICcuL2xpYi9zbHVnL3NsdWctYXN5bmMucGlwZSc7XG5leHBvcnQgeyBTbHVnUGlwZSB9IGZyb20gJy4vbGliL3NsdWcvc2x1Zy5waXBlJztcbmV4cG9ydCB7IFNsdWdTZXJ2aWNlIH0gZnJvbSAnLi9saWIvc2x1Zy9zbHVnLnNlcnZpY2UnO1xuZXhwb3J0IHsgQ29va2llU3RvcmFnZVNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xpYi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5leHBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuL2xpYi90cmFuc2xhdGUvdHJhbnNsYXRlJztcbmV4cG9ydCB7IFRyYW5zbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vbGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL2xpYi90cmFuc2xhdGUvdHJhbnNsYXRlLnBpcGUnO1xuZXhwb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vbGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZSc7XG5leHBvcnQgeyBTYWZlU3R5bGVQaXBlIH0gZnJvbSAnLi9saWIvdHJ1c3Qvc2FmZS1zdHlsZS5waXBlJztcbmV4cG9ydCB7IFNhZmVVcmxQaXBlIH0gZnJvbSAnLi9saWIvdHJ1c3Qvc2FmZS11cmwucGlwZSc7XG5leHBvcnQgeyBUcnVzdFBpcGUgfSBmcm9tICcuL2xpYi90cnVzdC90cnVzdC5waXBlJztcblxuIl19