import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

import { IdentityValidationComponent } from './identity-validation/identity-validation.component';
import { MemberAvatarGroupComponent } from './member-avatar-group/member-avatar-group.component';
import { MemberIdentityComponent } from './member-identity/member-identity.component';
import { OrganizationIdentityComponent } from './organization-identity/organization-identity.component';
import { UserIdentityComponent } from './user-identity/user-identity.component';
import { ApplyModule } from '../apply/apply.module';
import { AvatarModule } from '../avatar/avatar.module';
import { IconModule } from '../icon/icon.module';
import { SkeletonModule } from '../skeleton/skeleton.module';

const icons = [
  ['validation-invalid', 'assets/icons/validation-invalid.svg'],
  ['validation-valid', 'assets/icons/validation-valid.svg'],
  ['validation-none', 'assets/icons/validation-none.svg'],
];

@NgModule({
  declarations: [
    IdentityValidationComponent,
    MemberAvatarGroupComponent,
    MemberIdentityComponent,
    OrganizationIdentityComponent,
    UserIdentityComponent,
  ],
  imports: [
    ApplyModule,
    AvatarModule,
    CommonModule,
    IconModule,
    MatIconModule,
    MatTooltipModule,
    SkeletonModule,
  ],
  exports: [
    IdentityValidationComponent,
    MemberAvatarGroupComponent,
    MemberIdentityComponent,
    OrganizationIdentityComponent,
    UserIdentityComponent,
  ],
})
export class IdentityModule {
  constructor(
    sanitizer: DomSanitizer,
    matIconRegistry: MatIconRegistry,
  ) {
    icons.forEach(([name, path]) => matIconRegistry.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}
