import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbum } from '../models/album';
import { catchError, Observable, of, retry, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private httpService: HttpClient = inject(HttpClient);
  private loggerService: LoggerService = inject(LoggerService);

  constructor() {}

  getPosts(): Observable<IAlbum[]> {
    return this.httpService
      .get<IAlbum[]>(`${environment.API_URL}/photos`, {
        reportProgress: true,
      })
      .pipe(
        catchError((err) => {
          this.loggerService.log('PostService: getPosts');
          return of([]);
        })
      );
  }
}
