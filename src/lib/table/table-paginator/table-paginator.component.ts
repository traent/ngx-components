import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, combineLatest, MonoTypeOperatorFunction } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface TablePaginatorData {
  pageIndex: number;
  pageSize: number;
}

export const pageEventDistinct = (): MonoTypeOperatorFunction<TablePaginatorData> =>
  distinctUntilChanged((prev, next) => prev.pageIndex === next.pageIndex && prev.pageSize === next.pageSize);

export const tableOffset = (data: TablePaginatorData): number => data.pageIndex * data.pageSize;

@UntilDestroy()
@Component({
  selector: 'ngx-t3-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss'],
})
export class TablePaginatorComponent {
  private readonly pageIndex$ = new BehaviorSubject<number>(0);
  @Input() set pageIndex(value: number) {
    const index = (this.length$.value && value <= this.totalPages) ? value : 0;
    this.pageIndex$.next(index);
  }
  get pageIndex(): number {
    return this.pageIndex$.value;
  }

  @Input() pageSizeValues = [5, 25, 50, 100];
  private readonly pageSize$ = new BehaviorSubject<number>(this.pageSizeValues[0]);
  @Input() set pageSize(value: number) {
    this.pageSize$.next(value);
    this.pageIndex$.next(0);
  }
  get pageSize(): number {
    return this.pageSize$.value;
  };

  private readonly length$ = new BehaviorSubject<number | null>(null);
  @Input() set length(value: number) {
    this.length$.next(value);
  }

  get disableNext(): boolean {
    return (this.pageIndex$.value + 1) >= this.totalPages;
  }

  get disablePrev(): boolean {
    return !this.pageIndex$.value;
  }

  get totalPages(): number {
    return this.total ? Math.ceil(this.total / this.pageSize) : 0;
  }

  @Input() pageLabel = 'Page';
  @Input() ofLabel = 'of';
  @Input() total?: number;
  @Input() totalPageLabel = 'Items per page';

  @Output() readonly pageChange = new EventEmitter<TablePaginatorData>();

  constructor() {
    combineLatest([
      this.pageIndex$,
      this.pageSize$,
    ]).pipe(
      untilDestroyed(this),
      map(([pageIndex, pageSize]) => ({ pageSize, pageIndex })),
      pageEventDistinct(),
    ).subscribe((pageEvent) => this.pageChange.emit(pageEvent));
  }

  nextPage(): void {
    if (!this.disableNext) {
      this.pageIndex = this.pageIndex + 1;
    }
  }

  prevPage(): void {
    if (!this.disablePrev) {
      this.pageIndex = this.pageIndex - 1;
    }
  }

  firstPage(): void {
    this.pageIndex = 0;
  }

  lastPage(): void {
    if (!this.disableNext) {
      this.pageIndex = this.totalPages - 1;
    }
  }
}
