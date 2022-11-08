import { Component, HostBinding, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-t3-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @HostBinding('class.animated') @Input() animated = true;
  @HostBinding('class') @Input() animation: 'progress' | 'pulse' = 'progress';
}
