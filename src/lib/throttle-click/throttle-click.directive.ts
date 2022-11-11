import { EventEmitter, OnInit, OnDestroy, Directive, Input, Output, HostListener } from '@angular/core';
import { Subject, throttleTime, takeUntil } from 'rxjs';

/**
 * Emit the first click then skip subsequent clicks for a certain configurable amount of time.
 *
 * Useful to neutralize unwanted double-clicks.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[throttleClick]',
})
export class ThrottleClickDirective implements OnInit, OnDestroy {
  @Input() throttleTime = 500;
  @Output() readonly throttledClick = new EventEmitter();

  private readonly clicks = new Subject();
  private readonly onDestroy$ = new Subject<void>();

  ngOnInit() {
    this.clicks.pipe(
      takeUntil(this.onDestroy$),
      throttleTime(this.throttleTime),
    ).subscribe((event) => this.throttledClick.emit(event));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

}
