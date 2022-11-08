import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ngx-t3-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() autofocus = false;
  @Input() debounce = 300;
  @Input() hasBorder = true;
  @Input() persistClose = false;
  @Input() placeholder?: string;
  @Input() query = '';
  @Input() shape: 'rounded' | 'squared' = 'rounded';

  // eslint-disable-next-line class-methods-use-this
  @ViewChild('searchInput', { read: ElementRef }) set input(el: ElementRef<HTMLInputElement>) {
    if (this.autofocus) {
      el.nativeElement.focus();
    }
  }

  readonly innerQueryChange$ = new Subject<string>();

  @Output() readonly queryChange = this.innerQueryChange$.pipe(debounceTime(this.debounce));
  @Output() readonly clearQuery = new EventEmitter();
}
