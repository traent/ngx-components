import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { IdentityValidationState, IdentityValidationSize, IdentityValidation } from '../identity.model';

const getValidationIcon = (state: IdentityValidationState): string => {
  switch (state) {
    case IdentityValidationState.None: return 'validation-none';
    case IdentityValidationState.Valid: return 'validation-valid';
    case IdentityValidationState.Invalid: return 'validation-invalid';
  }
};

@Component({
  selector: 'ngx-t3-identity-validation',
  templateUrl: './identity-validation.component.html',
  styleUrls: ['./identity-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityValidationComponent {
  @Input() userValidation?: IdentityValidation;
  @Input() memberValidation?: IdentityValidation;
  @Input() orgValidation?: IdentityValidation;

  @HostBinding('class') @Input() size: IdentityValidationSize = 'sm';

  readonly getValidationIcon = getValidationIcon;

  readonly IdentityValidationState = IdentityValidationState;
}
