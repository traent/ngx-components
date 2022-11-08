import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy, Output } from '@angular/core';
import {
  asyncScheduler,
  interval,
  of,
  SchedulerAction,
  SchedulerLike,
  Subject,
  Subscription,
} from 'rxjs';
import { debounce, distinctUntilChanged, observeOn, startWith } from 'rxjs/operators';

/**
 * Note: we would like to use this library: https://www.npmjs.com/package/ngx-rxjs-zone-scheduler
 * But it is not completelly compatible with our RxJS version, we need to use the following custom implementation.
 * We expect to change this as soon as possible.
 */
class EnterZoneScheduler implements SchedulerLike {
  constructor(
    private readonly ngZone: NgZone,
    private readonly scheduler: SchedulerLike = asyncScheduler,
  ) {}

  now(): number {
    return this.scheduler.now();
  }

  schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription {
    return NgZone.isInAngularZone()
      ? this.scheduler.schedule(work, delay, state)
      : this.ngZone.run(() => this.scheduler.schedule(work, delay, state));
  }
}

@Directive({
  selector: '[ngxT3Visible]',
  exportAs: 'ngxT3Visible',
})
export class VisibleDirective implements AfterViewInit, OnDestroy {
  @Input() intersectionRoot: Element | null = null;
  @Input() intersectionRootMargin?: string;
  @Input() intersectionThreshold: number | number[] = 0;

  private readonly minVisibleDuration = 100;

  readonly visibleChangeInner = new Subject<boolean>();

  @Output() readonly visibleChange = this.visibleChangeInner.pipe(
    // Officially visible if continuously visible in the last `minVisibleDuration` millis.
    startWith(false),
    distinctUntilChanged(),
    debounce((value) => value ? interval(this.minVisibleDuration) : of()),
    distinctUntilChanged(),
    observeOn(new EnterZoneScheduler(this.ngZone)),
  );

  private _observer?: IntersectionObserver;

  constructor(private readonly element: ElementRef, private readonly ngZone: NgZone) { }

  ngAfterViewInit(): void {
    this.reset();

    this.ngZone.runOutsideAngular(() => {
      this._observer = new IntersectionObserver((entries) => {
        // NB: IntersectionObserver may coalesce multiple entries in one call
        entries.forEach((entry) => {
          this.visibleChangeInner.next(entry.isIntersecting);
        });
      }, {
        root: this.intersectionRoot,
        rootMargin: this.intersectionRootMargin,
        threshold: this.intersectionThreshold,
      });

      this._observer.observe(this.element.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.reset();
  }

  private reset(): void {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = undefined;
    }
  }
}
