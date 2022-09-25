import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, retry, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo } from '../models/todo';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private httpService: HttpClient = inject(HttpClient);
  private loggerService: LoggerService = inject(LoggerService);

  constructor() {}

  getTodos(): Observable<ITodo[]> {
    return this.httpService
      .get<ITodo[]>(`${environment.API_URL}/todos`, {
        reportProgress: true,
      })
      .pipe(
        catchError((err) => {
          this.loggerService.log('TodoService: getTodos');
          return of([]);
        })
      );
  }
}
