import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { TableContainerComponent } from './table-container/table-container.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';

@NgModule({
  declarations: [
    TableContainerComponent,
    TablePaginatorComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    TableContainerComponent,
    TablePaginatorComponent,
  ],
})
export class TableModule { }
