import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

import {
  StreamRadioRenderingComponent,
} from './stream-value-renderer/stream-radio-rendering/stream-radio-rendering.component';
import { StreamValueRendererComponent } from './stream-value-renderer/stream-value-renderer.component';
import { StreamComponent } from './stream.component';
import { ApplyModule } from '../apply/apply.module';
import { RedactedModule } from '../redacted/redacted.module';
import { SkeletonModule } from '../skeleton/skeleton.module';

const icons = [
  ['stream-overview', 'assets/icons/stream-overview.svg'],
];

@NgModule({
  declarations: [
    StreamComponent,
    StreamValueRendererComponent,
    StreamRadioRenderingComponent,
  ],
  imports: [
    ApplyModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    RedactedModule,
    SkeletonModule,
  ],
  exports: [
    StreamComponent,
    StreamValueRendererComponent,
  ],
})
export class StreamModule {
  constructor(
    sanitizer: DomSanitizer,
    matIconRegistry: MatIconRegistry,
  ) {
    icons.forEach(([name, path]) => matIconRegistry.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}
