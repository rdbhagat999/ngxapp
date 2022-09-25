import { inject, Injectable, ErrorHandler } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private loggerService: LoggerService = inject(LoggerService);

  handleError(error: unknown): void {
    // Always log errors
    console.log('GlobalErrorHandler::handleError');
    this.loggerService.logError(error);
  }
}
