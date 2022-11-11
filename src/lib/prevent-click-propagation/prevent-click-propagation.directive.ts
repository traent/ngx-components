import { Directive, HostListener } from '@angular/core';

const preventClickPropagation = ($event: Event): void => {
  $event.preventDefault();
  $event.stopPropagation();
};

@Directive({
  selector: '[ngxT3PreventClickPropagation]',
})
export class PreventClickPropagationDirective {

  @HostListener('click', ['$event']) preventClickPropagation = preventClickPropagation;
}
