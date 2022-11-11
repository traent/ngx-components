import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

const MARKER_CLASS = 'pointer';

/**
 * This directive is used to find all the elements having `pointer` class to make it possible to handle click on them.
 * You can use additional classes to distinguish the source elements that triggered the event.
 */
@Directive({
  selector: '[ngxT3PointerInnerClick]',
})
export class PointerInnerClickDirective {

  @Output() readonly innerClick = new EventEmitter<string>();

  @HostListener('click', ['$event.target']) click(target: HTMLElement): void {
    if (target.classList.contains(MARKER_CLASS)) {
      const eventNames: string[] = [];
      target.classList.forEach((className) => {
        if (className !== MARKER_CLASS) {
          eventNames.push(className);
        }
      });
      this.innerClick.emit(eventNames.join(' '));
    }
  }
}
