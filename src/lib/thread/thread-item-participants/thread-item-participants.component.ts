import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-t3-thread-item-participants',
  templateUrl: './thread-item-participants.component.html',
  styleUrls: ['./thread-item-participants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadItemParticipantsComponent {
  @Input() count?: number | null;
  @Input() creatorAvatar?: string | null;

  get countDefined() {
    return this.count || 0;
  }

  get isDataReady() {
    return this.count !== null && this.creatorAvatar !== null;
  }
}
