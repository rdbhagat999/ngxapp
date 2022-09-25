import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { CachingInterceptor } from './caching.interceptor';
import { GlobalErrorHandler } from './global-error-handler';
import { LazyImgDirective } from './lazy-img.directive';
import { RecaptchaDirective } from './recaptcha.directive';

@NgModule({
  declarations: [
    AppComponent,
    LazyImgDirective,
    BaseComponent,
    RecaptchaDirective,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HttpErrorInterceptor,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CachingInterceptor,
    },
  ],
  exports: [LazyImgDirective, BaseComponent, RecaptchaDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
