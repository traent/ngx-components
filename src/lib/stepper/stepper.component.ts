import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-t3-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() labels: string[] = [];
  @Input() current = 0;
}
