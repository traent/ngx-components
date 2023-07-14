import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export enum HealthStatus {
  Unhealthy = 'Unhealthy',
  Degraded = 'Degraded',
  Healthy = 'Healthy'
}

@Component({
  selector: 'ngx-t3-app-status-info',
  templateUrl: './app-status-info.component.html',
  styleUrls: ['./app-status-info.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppStatusInfoComponent {
  @Input() url?: string;
  @Input() status?: HealthStatus;
  @Input() text = 'Status';

  readonly HealthStatus = HealthStatus;
}
