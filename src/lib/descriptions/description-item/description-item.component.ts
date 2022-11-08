import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ngx-t3-description-item',
  templateUrl: './description-item.component.html',
  styleUrls: ['./description-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionItemComponent {
  @Input() label?: string;

  @Input() @HostBinding('class.has-divider') hasDivider = true;
  @Input() @HostBinding('class.multiline') multiline = false;
}
