import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-t3-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableContainerComponent {
  @Input() isLoading = false;

}
