import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { required, isNotNullOrUndefined } from '@traent/ts-utils';
import { BehaviorSubject, switchMap } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { StreamEntryType, getStreamTypeIcon } from '../../org-types/streams/streams';

const formatDate = (date: Date, datePipe: DatePipe): string | undefined =>
  datePipe.transform(date, 'd MMMM yyy') || undefined;

export const defaultStreamValueFormTranslations = {
  errors: {
    email: 'The field must contains a valid email',
    jsonValidationError: 'The json value is not valid',
    max: (max: number) => `Must be lower or equal to ${max}`,
    maxDate: (maxDate: string | undefined) => `Must be before or equal to ${maxDate}`,
    maxlength: (requiredLength: number) => `Length must be lower or equal to ${requiredLength}`,
    min: (min: number) => `Must be greater or equal to ${min}`,
    minDate: (minDate: string | undefined) => `Must be after or equal to ${minDate}`,
    minlength: (requiredLength: string) => `Length must be greater or equal to ${requiredLength}`,
    pattern: (requiredPattern: string) => `Required pattern is ${requiredPattern}`,
    required: 'This field is required',
    url: 'Enter a valid URL address preceded by http:// or https://',
  },
  placeholders: {
    currency: 'Currency',
    date: 'Date',
    num: 'Number',
    text: 'Text',
    uri: 'Uri',
  },
  checkedValueLabel: 'checked',
  uncheckedValueLabel: 'unchecked',
  notSupportedType: 'Not supported stream type',
  clearSelection: 'Clear Selection',
};

@Component({
  selector: 'ngx-t3-stream-value-form',
  templateUrl: './stream-value-form.component.html',
  styleUrls: ['./stream-value-form.component.scss'],
  providers: [DatePipe],
})
export class StreamValueFormComponent {

  readonly form$ = new BehaviorSubject<FormGroup | null>(null);
  @Input() set form(form: FormGroup | null) {
    this.form$.next(form);
  }

  readonly type$ = new BehaviorSubject<StreamEntryType | undefined>(undefined);
  @Input() set type(type: StreamEntryType | undefined) {
    this.type$.next(type);
  }

  readonly configuration$ = new BehaviorSubject<any>(undefined);
  @Input() set configuration(configuration: any) {
    this.configuration$.next(configuration);
  }

  /** Set this input will override the current form stream value and configuration */
  @Input() set formValue(formValue: any) {
    const form = this.form$.value;
    if (!form) {
      return;
    }
    const valueControl = form.get('value');
    if (valueControl) {
      valueControl.patchValue(formValue?.value);
    }
    const configurationControl = form.get('configuration');
    if (configurationControl) {
      configurationControl.patchValue(formValue?.configuration);
    }
  }

  @Input() isReadonly = false;
  @Input() translations = defaultStreamValueFormTranslations;
  @Input() customTemplate: TemplateRef<any> | null = null;

  readonly readonlyValue$ = this.form$.pipe(
    isNotNullOrUndefined(),
    switchMap((form) => form.valueChanges.pipe(startWith(form.value))),
    map((formValue) => formValue?.value),
  );

  get selectOptionsControl(): FormArray {
    return (this.form$?.value?.controls.configuration as FormGroup).controls.allowedValues as FormArray;
  }

  get currencySymbol(): string | undefined {
    return (this.form$?.value?.controls.configuration as FormGroup).controls?.symbol?.value;
  }

  get formErrors(): string[] {
    const errors = [];
    const form = this.form$.value;
    required(form);
    const valueControl = form.get('value');
    required(valueControl);
    if (!valueControl.errors) {
      return [];
    }
    if (valueControl.errors.min) {
      errors.push(this.translations.errors.min(valueControl.errors.min));
    }
    if (valueControl.errors.max) {
      errors.push(this.translations.errors.max(valueControl.errors.max));
    }
    if (valueControl.errors.minlength) {
      errors.push(this.translations.errors.minlength(valueControl.errors.minlength));
    }
    if (valueControl.errors.maxlength) {
      errors.push(this.translations.errors.maxlength(valueControl.errors.maxlength));
    }
    if (valueControl.errors.pattern) {
      errors.push(this.translations.errors.pattern(valueControl.errors.pattern));
    }
    if (valueControl.errors.required) {
      errors.push(this.translations.errors.required);
    }
    if (valueControl.errors.minDate) {
      errors.push(this.translations.errors.minDate(formatDate(valueControl.errors.minDate.minDate, this.datePipe)));
    }
    if (valueControl.errors.maxDate) {
      errors.push(this.translations.errors.maxDate(formatDate(valueControl.errors.maxDate.maxDate, this.datePipe)));
    }
    if (valueControl.errors.jsonValidationError) {
      errors.push(this.translations.errors.jsonValidationError);
    }
    if (valueControl.errors.email) {
      errors.push(this.translations.errors.email);
    }
    return errors;
  }

  readonly getStreamTypeIcon = getStreamTypeIcon;
  readonly StreamEntryType = StreamEntryType;

  constructor(private readonly datePipe: DatePipe) { }

  patchValue(value: any) {
    const valueControl = this.form$.value?.get('value');
    if (valueControl) {
      valueControl.patchValue(value);
    }
  }
}
