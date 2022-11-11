import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-t3-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent<T> {
  @Input() value?: T;
  @Input() @HostBinding('class') justify: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'start';

  @Output() readonly valueChange = new EventEmitter<T>();
}
