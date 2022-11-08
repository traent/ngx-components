import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { MaterialOrCustomIcon } from '../../../icon/icon.component';
import { Redactable } from '../../../redacted/model';
import { DocumentFormStreamItem } from '../../models/forms';

export type FormFillItem = DocumentFormStreamItem & {
  value: any;
  updatedAt?: string;
};

@Component({
  selector: 'ngx-t3-form-item-filler',
  templateUrl: './form-item-filler.component.html',
  styleUrls: ['./form-item-filler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormItemFillerComponent {
  @Input() name?: Redactable<string>;
  @Input() description?: Redactable<string>;
  @Input() icon?: MaterialOrCustomIcon;
  @Input() invalid = false;
  @Input() required?: Redactable<boolean>;
  @Input() updatedAt?: Redactable<string>;
}
