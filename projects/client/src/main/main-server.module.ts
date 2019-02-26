import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';

@NgModule({
	imports: [
		ModuleMapLoaderModule, // <-- *Important* to have lazy-loaded routes work
		AppModule,
		ServerModule,
		ServerTransferStateModule,
		NoopAnimationsModule,
		/*
		ServerPrebootModule.recordEvents({ appRoot: 'app-root' }),
		HttpTransferCacheModule still needs fixes for 5.0
		Leave this commented out for now, as it breaks Server-renders
		Looking into fixes for this! - @MarkPieszak
		ServerTransferStateModule // <-- broken for the time-being with ASP.NET
		*/
	],
	bootstrap: [AppComponent],
})

export class MainServerModule { }
