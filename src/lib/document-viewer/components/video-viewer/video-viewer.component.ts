import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  combineLatest,
  distinctUntilChanged,
  fromEvent,
  startWith,
  timer,
  map,
  pairwise,
  BehaviorSubject,
  switchMap,
  filter,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'ngx-t3-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoViewerComponent implements OnDestroy {
  /**
   * SECURITY Issue
   *
   * This component assumes that the rendered data is safe to display.
   * SVG (and probably other kinds of) images could trigger XSS attacks, so be careful with data to this input.
   */
  @Input() set data(value: string | Blob | null | undefined) {
    this.ngOnDestroy();

    if (!value) {
      return;
    }

    const raw = value instanceof Blob ? URL.createObjectURL(value) : value;

    this.resource = {
      safe: this.sanitizer.bypassSecurityTrustUrl(raw),
      raw,
    };
  }

  @Output() readonly contentError = new EventEmitter();

  @Output() readonly contentLoad = new EventEmitter();

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:keydown', ['$event'])
  async onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' || (!document.fullscreenElement && !event.key)) {
      this.isFullscreen$.next(false);
    }
  }

  resource?: { raw: string; safe: SafeUrl };

  isSeeking = false;

  private readonly isFullscreen$ = new BehaviorSubject(false);
  get isFullscreen() {
    return this.isFullscreen$.value;
  }

  readonly forceControls$ = new BehaviorSubject<boolean | undefined>(true);

  readonly isLookingForControls$ = this.isFullscreen$.pipe(
    // Trigger this Observable only if we are in fullscreen mode
    filter((isFullscreen) => !!isFullscreen),
    switchMap(() => combineLatest([
      this.forceControls$,
      timer(0, 1000),
      fromEvent<MouseEvent>(document, 'mousemove').pipe(
        map((mouse) => [Math.abs(mouse.screenX), Math.abs(mouse.screenY)]),
      ),
    ]).pipe(
      // Close the inner combineLatest observable when we are not in fullscreen mode
      takeUntil(this.isFullscreen$.pipe((filter((isFullscreen) => !isFullscreen)))),
    )),
    distinctUntilChanged(([_, prevTimer], [__, currTimer]) => (prevTimer === currTimer)),
    pairwise(),
    map(([[_, prevTimer, [prevX, prevY]], [isForced, currTimer, [currX, currY]]]) =>
      isForced || (currTimer !== prevTimer && (Math.abs(currX - prevX) > 25 || Math.abs(currY - prevY) > 25))
        ? true
        : false,
    ),
    startWith(true),
  );

  constructor(private readonly sanitizer: DomSanitizer) { }

  async toggleFullScreen() {
    try {
      if (!this.isFullscreen) {
        await document.documentElement.requestFullscreen();
      } else { await document.exitFullscreen(); }
    } catch {
      // Maybe here we should use CatchErrorService to handle a "Fullscreen is not supported on your device" situation
    }
    this.isFullscreen$.next(!this.isFullscreen);
  }

  ngOnDestroy(): void {
    if (this.resource) {
      URL.revokeObjectURL(this.resource.raw);
      this.resource = undefined;
    }
  }
}
