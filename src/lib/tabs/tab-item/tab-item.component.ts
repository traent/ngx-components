import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';

import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'ngx-t3-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabItemComponent<T> {
  @Input() value?: T;
  @Input() @HostBinding('class') width: 'square' | 'content' | 'fill' = 'content';
  @Input() @HostBinding('class.disabled') disabled = false;

  @HostBinding('class.active') get active(): boolean {
    return this.value === this.tabs.value;
  }

  @HostListener('click') click(): void {
    if (this.active || this.disabled) {
      return;
    }

    this.activate();
  }

  constructor(readonly tabs: TabsComponent<T>) {
  }

  activate(): void {
    this.tabs.value = this.value;
    this.tabs.valueChange.emit(this.value);
  }

}
