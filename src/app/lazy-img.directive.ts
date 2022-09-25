import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: 'img',
})
export class LazyImgDirective implements OnInit {
  private el: ElementRef<HTMLImageElement> = inject(
    ElementRef<HTMLImageElement>
  );

  constructor() {}

  ngOnInit(): void {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      this.el.nativeElement.setAttribute('loading', 'lazy');
    } else {
      // fallback to IntersectionObserver
    }
  }
}
