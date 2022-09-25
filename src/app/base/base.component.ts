import { Component, inject, OnDestroy } from '@angular/core';
import { Subscription, TeardownLogic } from 'rxjs';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnDestroy {
  logger: LoggerService = inject(LoggerService);

  subscribers: Subscription = new Subscription();

  constructor() {}

  addSafeSubscriber(source: TeardownLogic): void {
    this.subscribers.add(source);
    this.logger.log('added subscription');
  }

  ngOnDestroy(): void {
    this.subscribers.unsubscribe();
    this.logger.log('removed subscription');
  }
}
