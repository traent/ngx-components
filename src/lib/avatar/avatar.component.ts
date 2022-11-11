import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

export type AvatarSize = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'lg' | 'md' | 'xl';

export enum WorkflowAvatar {
  Bot = '/assets/images/workflow-avatar.svg',
  Organization = '/assets/images/workflow-organization.svg'
}

export enum AvatarPlaceholder {
  Person = '/assets/images/default-user-avatar.svg',
  Organization = '/assets/images/default-organization-avatar.svg'
}

@Component({
  selector: 'ngx-t3-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() @HostBinding('class') size: AvatarSize = 'md';
  @Input() @HostBinding('class.square') square = false;

  @Input() placeholder: string = AvatarPlaceholder.Person;
  @Input() src: string | null | undefined = null;
  @Input() editable = false;
  @Input() editButtonTooltip = '';

  @Output() readonly imageFileChange = new EventEmitter<Event>();
  @Output() readonly imageRemove = new EventEmitter();

  get isDataReady() {
    return this.src !== null;
  }

  get isAvailable() {
    return this.src !== undefined;
  }
}
