import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-t3-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagGroupComponent {
  @Input() count = 0;
  @Input() limit?: number;
}
