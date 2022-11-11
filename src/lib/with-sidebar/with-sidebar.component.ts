import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-t3-with-sidebar',
  templateUrl: './with-sidebar.component.html',
  styleUrls: ['./with-sidebar.component.scss'],
})
export class WithSidebarComponent {
  @Input() showBorder = false;

  scrollTop = 0;
}
