import { A11yModule } from '@angular/cdk/a11y';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StreamMultiSelectControlComponent } from './stream-multi-select-control/stream-multi-select-control.component';
import { StreamValueFormComponent } from './stream-value-form/stream-value-form.component';
import { ApplyModule } from '../apply/apply.module';
import { RedactedModule } from '../redacted/redacted.module';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { StreamModule } from '../stream/stream.module';

@NgModule({
  declarations: [
    StreamMultiSelectControlComponent,
    StreamValueFormComponent,
  ],
  imports: [
    A11yModule,
    ApplyModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RedactedModule,
    SkeletonModule,
    StreamModule,
    TextFieldModule,
  ],
  exports: [
    StreamMultiSelectControlComponent,
    StreamValueFormComponent,
  ],
})
export class StreamFormModule { }
