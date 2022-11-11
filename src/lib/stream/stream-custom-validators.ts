import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/;

export const urlValidator = (): ValidatorFn => (control: AbstractControl) => !!control.value
  ? urlRegex.test(control.value) ? null : { urlFormat: true }
  : null;

export const machineNameValidator = (): ValidatorFn => (control: AbstractControl) => !!control.value
  ? String(control.value).startsWith('X-') ? null : { machineNameFormat: true }
  : null;

export const minDate = (date: Date): ValidatorFn => (control: AbstractControl): ValidationErrors | null =>
  control.value && control.value < date ? { minDate: { minDate: date, actualDate: control.value }} : null;

export const maxDate = (date: Date): ValidatorFn => (control: AbstractControl): ValidationErrors | null =>
  control.value && control.value > date ? { maxDate: { maxDate: date, actualDate: control.value }} : null;

