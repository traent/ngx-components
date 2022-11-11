import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-t3-form-item-heading',
  templateUrl: './form-item-heading.component.html',
  styleUrls: ['./form-item-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormItemHeadingComponent {
  @Input() name?: string;
  @Input() description?: string;
}
