import { ListKeyManagerOption } from '@angular/cdk/a11y';
import { HostBinding, Directive, Input, ElementRef, HostListener } from '@angular/core';

import { NgxT3ListComponent } from './list.component';

@Directive({
  selector: '[ngxT3ListItem]',
})
export class NgxT3ListItemDirective implements ListKeyManagerOption {

  @HostBinding('tabindex') tabIndex = '-1';

  @HostListener('mousemove', ['$event']) mousemove() {
    this.list?.onMouseMove(this);
  }

  @HostListener('mouseenter', ['$event']) mouseenter() {
    this.list?.onMouseEnter(this);
  }

  @HostListener('mouseleave', ['$event']) mouseleave() {
    this.list?.onMouseLeave(this);
  }

  @HostListener('click', ['$event']) click() {
    this.list?.onMouseClick(this);
  }

  @Input() id?: string;

  @Input() @HostBinding('class.active') active = false;
  @Input() @HostBinding('class.t3-via-mouse') viaMouse = false;
  @Input() @HostBinding('class.t3-via-keyboard') viaKeyboard = false;

  constructor(
    private readonly element: ElementRef,
    private readonly list: NgxT3ListComponent,
  ) {
    if (!list) {
      console.warn('ngxT3ListItem directive must be wrapped inside a NgxT3ListComponent instance.');
    }
  }

  disabled?: boolean;

  getId(): string | undefined {
    return this.id;
  }

  focusElement() {
    this.element.nativeElement.focus();
  }
}
