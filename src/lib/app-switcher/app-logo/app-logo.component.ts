import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ngx-t3-app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLogoComponent {
  @Input() appName?: 'identity' | 'organizations' | 'era' | 'admin' | 'traent';
  @Input() appNameSecondary?: 'viewer';
  @Input() logoColor: 'black' | 'white' = 'black';
  @Input() @HostBinding('class.opal-pointer') clickable = true;
}
