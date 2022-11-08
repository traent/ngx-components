import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgClickOutsideDirective } from 'ng-click-outside2';

import { IconModule } from '../icon/icon.module';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { AppSwitcherComponent } from './app-switcher.component';
import { AppTermsAndConditionsComponent } from './app-terms-and-conditions/app-terms-and-conditions.component';

const icons = [
  ['identity-app', 'assets/icons/identity-app.svg'],
  ['organizations', 'assets/icons/organizations.svg'],
  ['org-app', 'assets/icons/org-app.svg'],
  ['viewer-app', 'assets/icons/viewer-app.svg'],
];

@NgModule({
  declarations: [
    AppLogoComponent,
    AppSwitcherComponent,
    AppTermsAndConditionsComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    MatButtonModule,
    MatIconModule,
    NgClickOutsideDirective,
    RouterModule,
  ],
  exports: [
    AppLogoComponent,
    AppSwitcherComponent,
    AppTermsAndConditionsComponent,
  ],
})
export class AppSwitcherModule {
  constructor(
    sanitizer: DomSanitizer,
    matIconRegistry: MatIconRegistry,
  ) {
    icons.forEach(([name, path]) => matIconRegistry.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}
