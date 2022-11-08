import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ngx-t3-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionsComponent {
  @Input() @HostBinding('class.has-dividers') hasDividers = true;
}
