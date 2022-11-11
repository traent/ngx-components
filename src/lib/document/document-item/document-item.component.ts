import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-t3-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentItemComponent {
    @Input() name?: string | null;
    @Input() redactedLabel = 'Redacted document';
    @Input() createdAt?: string | null;

    get isDataReady(): boolean {
      return this.name !== null && this.createdAt !== null;
    }
  }
