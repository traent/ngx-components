import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ngxT3Autofocus]',
})
export class AutofocusDirective implements AfterContentInit {

  @Input('ngxT3Autofocus') autofocus = false;
  constructor(readonly element: ElementRef) {}

  ngAfterContentInit(): void {
    if (this.autofocus) {
      this.element.nativeElement.focus();
    }
  }
}
