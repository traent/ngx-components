import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-t3-stream-multi-select-control',
  templateUrl: './stream-multi-select-control.component.html',
  styleUrls: ['./stream-multi-select-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StreamMultiSelectControlComponent),
    multi: true,
  }],
})
export class StreamMultiSelectControlComponent implements OnChanges, ControlValueAccessor {
  @Input() options: string[] = [];

  form = this.buildForm();

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnChanges(): void {
    this.form = this.buildForm();
  }

  // eslint-disable-next-line class-methods-use-this
  onChanged: any = () => { };

  // eslint-disable-next-line class-methods-use-this
  onTouched: any = () => { };

  writeValue(value: string[] | null | undefined): void {
    const values = value ?? [];
    this.form.setValue(this.options.map((o) => values.includes(o)));
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange() {
    this.onChanged(this.options.filter((_, idx) => this.form.value[idx]));
  }

  buildForm() {
    return this.formBuilder.nonNullable.array(this.options.map(() => false));
  }
}
