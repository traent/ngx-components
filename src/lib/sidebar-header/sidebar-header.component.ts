import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-t3-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeaderComponent {

  @Input() @HostBinding('class') size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h4';
  @Input() element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h4';
  @Input() backToElement: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h5';
  @Input() ellipsed = true;
  @Input() label?: string;
  @Input() backToLabel?: string;

  @Output() readonly backTo = new EventEmitter();

}
