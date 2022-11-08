import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'ngx-t3-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerComponent implements OnDestroy {

  resource: { raw: string; safe: SafeUrl } | null = null;

  /**
   * SECURITY: this component assumes that the rendered data is safe to display.
   * SVG (and probably other kind of) images could trigger XSS attacks, so be careful data to this input.
   */
  @Input() set data(value: Blob | null | undefined) {
    this.ngOnDestroy();
    if (!value) {
      return;
    }
    const url = URL.createObjectURL(value);
    this.resource = {
      safe: this.sanitizer.bypassSecurityTrustUrl(url),
      raw: url,
    };
  }

  @Input() zoom = 1;

  @Output() readonly contentError = new EventEmitter();
  @Output() readonly contentLoad = new EventEmitter();

  readonly initialImageWidth = 765;
  readonly imagePadding = 48;

  constructor(private readonly sanitizer: DomSanitizer) { }

  ngOnDestroy(): void {
    if (this.resource) {
      URL.revokeObjectURL(this.resource.raw);
      this.resource = null;
    }
  }
}
