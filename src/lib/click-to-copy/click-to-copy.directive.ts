import { Clipboard } from '@angular/cdk/clipboard';
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[ngxT3ClickToCopy]',
})
export class ClickToCopyDirective {

  @Input() ngxT3ClickToCopy?: string;
  @Output() readonly copied = new EventEmitter();
  @HostBinding('class') @Input() additionalClasses = 'tw-underline tw-cursor-pointer';

  constructor(private readonly clipBoard: Clipboard) { }

  @HostListener('click') copy(): void {
    if (!this.ngxT3ClickToCopy) {
      return;
    }

    if (this.clipBoard.copy(this.ngxT3ClickToCopy)) {
      this.copied.emit();
    }
  }
}
