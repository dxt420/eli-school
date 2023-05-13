import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { VtPopupPageModule } from './vt-popup/vt-popup.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, BaseAppConfig } from './app.config'; 
import { ApiDjangoService } from 'src/services/api-django.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from 'src/services/token.interceptor';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthGuardService } from 'src/services/auth-guard.service';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    TranslateModule,
    VtPopupPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // ApiDjangoService,
    AuthGuardService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
