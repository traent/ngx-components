import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export type TagSize = 'sm' | 'md';

@Component({
  selector: 'ngx-t3-tag',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() @HostBinding('class') size: TagSize = 'md';
  @Input() @HostBinding('class.chip') chip = true;
  @Input() @HostBinding('class.tw-truncate') ellipsed = true;
}
