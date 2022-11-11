export type IdentitySize = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'lg' | 'md' | 'xl';

export type IdentityValidationSize = 'xs' | 'sm' | 'md' | 'lg';

export interface IdentityValidation {
  state: IdentityValidationState;
  message: string;
};

export enum IdentityValidationState {
  Invalid = 'invalid',
  None = 'none',
  Valid = 'valid'
};
