import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ngx-t3-growing-search-bar',
  templateUrl: './growing-search-bar.component.html',
  styleUrls: ['./growing-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrowingSearchBarComponent {
  @Input() isOpen = false;
  @Input() mode: 'preview-search' | 'search-button' = 'search-button';
  @Input() placeholder = '';
  @Input() previewPlaceHolder?: string;
  @Input() query = '';
  /** TODO: Remove it after the search is impelemented on the Viewer app */
  @Input() hideSearch = false;

  @Output() readonly inputToggle = new EventEmitter<boolean>();
  @Output() readonly queryChange = new EventEmitter<string>();

  changeState(): void {
    this.isOpen = !this.isOpen;
    this.inputToggle.emit(this.isOpen);
  }
}
