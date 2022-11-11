import { Pipe, PipeTransform } from '@angular/core';

export type FieldValue<T> = { value: T };

@Pipe({ name: 'fieldValue' })
export class FieldValuePipe implements PipeTransform {
  transform<T>(value: FieldValue<T> | null | undefined): T | null | undefined;
  transform<T>(value: FieldValue<T>): T;
  transform<T>(value: FieldValue<T> | undefined): T | undefined;
  // eslint-disable-next-line class-methods-use-this
  transform<T>(value: FieldValue<T> | null | undefined): T | null | undefined {
    if (value == null) {
      return value;
    }
    return value.value;
  }
}
