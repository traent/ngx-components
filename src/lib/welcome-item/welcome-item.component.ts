import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MaterialOrCustomIcon } from '../icon/icon.component';

@Component({
  selector: 'ngx-t3-welcome-item',
  templateUrl: './welcome-item.component.html',
  styleUrls: ['./welcome-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeItemComponent {

  @Input() imgPath?: string;
  @Input() icon?: { name: MaterialOrCustomIcon; bgColor: string; textColor: string };
  @Input() feature?: { name: string; desc: string };
}
