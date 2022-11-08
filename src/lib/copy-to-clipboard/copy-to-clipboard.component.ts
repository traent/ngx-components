import { Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-t3-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss'],
})
export class CopyToClipboardComponent {
  @ViewChild('copyTooltip') copyTooltip?: MatTooltip;

  @Input() @HostBinding('class') size: IconSize = 'md';
  @Input() additionalClasses = 'opal-pointer';
  @Input() copiedTooltip = 'Copied';
  @Input() position: TooltipPosition = 'above';
  @Input() textToCopy?: string;
  @Input() tooltip = 'Click to copy';
  @Input() hover = true;

  @Output() readonly copied = new EventEmitter();

  isCopied = false;
  delay = 3000;

  copySuccess(): void {
    this.copied.emit();

    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, this.delay);

    this.copyTooltip?.show();
    setTimeout(() => {
      this.copyTooltip?.hide();
    }, this.delay - 100);
  }
}
