import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type PrivacyPolicyProps = Partial<{
  year: number;
  company: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  privacyPolicy: string;
  termsAndConditions: string;
}>;

@Component({
  selector: 'ngx-t3-app-terms-and-conditions',
  templateUrl: './app-terms-and-conditions.component.html',
  styleUrls: ['./app-terms-and-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTermsAndConditionsComponent {

  private _privacyPolicyProps: PrivacyPolicyProps = {
    year: new Date().getFullYear(),
    company: 'Traent',
    privacyPolicy: 'Privacy',
    termsAndConditions: 'Terms',
    termsAndConditionsUrl: '',
    privacyPolicyUrl: '',
  };
  get privacyPolicyProps(): PrivacyPolicyProps {
    return this._privacyPolicyProps;
  }
  @Input() set privacyPolicy(value: PrivacyPolicyProps) {
    this._privacyPolicyProps = { ...this.privacyPolicyProps, ...value };
  }
}
