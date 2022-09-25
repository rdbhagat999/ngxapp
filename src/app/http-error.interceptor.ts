import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError, timer } from 'rxjs';
import { LoggerService } from './services/logger.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private loggerService: LoggerService = inject(LoggerService);

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry({
        count: 3,
        delay(error, retryCount) {
          return timer(retryCount * 1000);
        },
      }),
      catchError((error: HttpErrorResponse) => {
        this.loggerService.log('HttpErrorInterceptor');
        this.loggerService.logError(error);

        if (error.status === 401) {
          // refresh token
          return throwError(() => new Error('Unauthorized Access'));
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}
