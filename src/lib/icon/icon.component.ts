import { Component, Input } from '@angular/core';

export type MaterialOrCustomIcon = {
  material: string;
  transform?: string;
  custom?: undefined;
} | {
  material?: undefined;
  transform?: string;
  custom: string;
};

@Component({
  selector: 'ngx-t3-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon?: MaterialOrCustomIcon;
  @Input() iconClass?: string;
}
