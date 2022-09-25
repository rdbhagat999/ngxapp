import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appInputFocus]',
})
export class InputFocusDirective implements OnInit, AfterViewInit {
  private el: ElementRef = inject(ElementRef);

  constructor() {}

  ngOnInit(): void {
    if (!this.el.nativeElement['focus']) {
      console.log('Element does not accept focus.');
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 200);
  }
}
