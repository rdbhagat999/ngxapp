import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

declare global {
  interface Window {
    recaptchaCallback: () => void;
    grecaptcha: {
      render: (...args: any[]) => number;
      ready: (fn: Function) => void;
    };
  }
}

@Directive({
  selector: '[appRecaptcha]',
})
export class RecaptchaDirective implements OnInit, OnDestroy {
  @Output() recaptchaSuccess = new EventEmitter<string>();
  @Output() recaptchaExpired = new EventEmitter<unknown>();
  @Output() recaptchaError = new EventEmitter<unknown>();

  private readonly el: ElementRef = inject(ElementRef);
  private readonly dom = inject(DOCUMENT);
  private readonly ngZone: NgZone = inject(NgZone);

  private readonly scriptId = 'recaptcha-script';
  private widgetId: number | undefined;

  constructor() {}

  ngOnInit() {
    this.registerCaptchaCallback();
    this.addScript();
  }

  ngOnDestroy() {
    this.widgetId = undefined;
  }

  private registerCaptchaCallback() {
    window.recaptchaCallback = () => {
      const config = {
        sitekey: environment.recaptchaSitekey,
        size: 'invisible',
        callback: this.onSuccessCallback.bind(this),
        'error-callback': this.onErrorCallback.bind(this),
        'expired-callback': this.onExpiredCallback.bind(this),
      };
      this.renderCaptcha(config);
    };
  }

  private renderCaptcha(config: any) {
    try {
      window?.grecaptcha?.ready(() => {
        this.widgetId = window?.grecaptcha?.render(
          this.el?.nativeElement,
          config
        );
      });

      // this.widgetId = window?.grecaptcha?.render(this.el?.nativeElement, config);
    } catch (error) {
      // console.log(error?.message);
    }
  }

  private addScript() {
    if (this.dom.getElementById(this.scriptId) != null) {
      return;
    }
    const script = this.dom.createElement('script');
    script.src = environment?.recaptchaURL;
    script.id = this.scriptId;
    script.async = true;
    script.defer = true;
    this.dom.body.appendChild(script);
  }

  private onSuccessCallback(token: string) {
    this.ngZone.run(() => {
      this.recaptchaSuccess.emit(token);
    });
  }

  private onErrorCallback() {
    this.ngZone.run(() => {
      this.recaptchaError.emit();
    });
  }

  private onExpiredCallback() {
    this.ngZone.run(() => {
      this.recaptchaExpired.emit();
    });
  }
}
