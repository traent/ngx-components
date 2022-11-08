import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

import { MaterialOrCustomIcon } from '../icon/icon.component';

export type AppProps = Partial<{
  id: 'identity-app' | 'identity-org-app' | 'org-app' | 'viewer-app' | 'admin-app';
  url: string;
  name: string;
  icon: MaterialOrCustomIcon;
  description: string;
  selected: boolean;
  disabled: boolean;
  disabledMessage: boolean;
}>;

@Component({
  selector: 'ngx-t3-app-switcher',
  templateUrl: './app-switcher.component.html',
  styleUrls: ['./app-switcher.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-4px)', opacity: 0.75 }),
        animate('175ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('175ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          style({ transform: 'translateY(-4px)', opacity: 0 })),
      ]),
    ]),
  ],
  exportAs: 'switcher',
})
export class AppSwitcherComponent {
  private _identityProps: AppProps = {
    id: 'identity-app',
    name: 'Traent Identity',
    icon: { custom: 'identity-app' },
    description: 'Manage your personal details and account settings on Traent platform',
  };
  get identityProps(): AppProps {
    return this._identityProps;
  }
  @Input() set identityProps(value: AppProps) {
    this._identityProps = { ...this.identityProps, ...value, id: this._identityProps.id };
  }

  private _organizationsProps: AppProps = {
    id: 'identity-org-app',
    name: 'Traent Organizations',
    icon: { custom: 'organizations' },
    description: 'Manage your organizations and Era profiles to start working on Era collaborative projects',
  };
  get organizationsProps(): AppProps {
    return this._organizationsProps;
  }
  @Input() set organizationsProps(value: AppProps) {
    this._organizationsProps = { ...this.organizationsProps, ...value, id: this._organizationsProps.id };
  }

  /** TODO: Replace usage of Era name in favour of orgApp */
  private _eraProps: AppProps = {
    id: 'org-app',
    name: 'Traent Era',
    icon: { custom: 'org-app' },
    description: 'Create, manage and collaborate on projects written on a dynamic blockchain',
  };
  get eraProps(): AppProps {
    return this._eraProps;
  }
  @Input() set eraProps(value: AppProps) {
    this._eraProps = { ...this.eraProps, ...value, id: this._eraProps.id };
  }

  private _viewerProps: AppProps = {
    id: 'viewer-app',
    name: 'Traent Viewer',
    icon: { custom: 'viewer-app' },
    description: 'View and inspect the validation status of an Era ledger archive',
  };
  get viewerProps(): AppProps {
    return this._viewerProps;
  }
  @Input() set viewerProps(value: AppProps) {
    this._viewerProps = { ...this.viewerProps, ...value, id: this._viewerProps.id };
  }

  private _adminProps: AppProps = {
    id: 'admin-app',
    name: 'Traent Admin',
    icon: { material: 'account_circle' },
    description: '',
  };
  get adminProps(): AppProps {
    return this._adminProps;
  }
  @Input() set adminProps(value: AppProps) {
    this._adminProps = { ...this.adminProps, ...value, id: this._adminProps.id };
  }

  isDrawerOpen = false;

  closeDrawer() {
    this.isDrawerOpen = false;
  }
}
