import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-t3-profile-field',
  templateUrl: './profile-field.component.html',
  styleUrls: ['./profile-field.component.scss'],
})
export class ProfileFieldComponent {

  @Input() label?: string;
  @Input() line: 'none' | 'full'  = 'full';
  @Input() value?: string;

  @ContentChild('centralTemplate', { read: TemplateRef }) customCentralTemplate?: TemplateRef<any>;
}
