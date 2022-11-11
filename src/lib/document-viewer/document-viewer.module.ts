import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { NgClickOutsideDirective } from 'ng-click-outside2';

import { AcksModule } from '../acks/acks.module';
import { ApplyModule } from '../apply/apply.module';
import { IconModule } from '../icon/icon.module';
import { RedactedModule } from '../redacted/redacted.module';
import { VisibleModule } from '../visible/visible.module';
import { FormItemFillerComponent } from './components/form-item-filler/form-item-filler.component';
import { FormItemHeadingComponent } from './components/form-item-heading/form-item-heading.component';
import { GenericViewerComponent } from './components/generic-viewer/generic-viewer.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { PdfAcrofieldControlComponent } from './components/pdf-acrofield-control/pdf-acrofield-control.component';
import { PdfAnchorComponent } from './components/pdf-anchor/pdf-anchor.component';
import { PdfPageCanvasComponent } from './components/pdf-page-canvas/pdf-page-canvas.component';
import { PdfTextContentComponent } from './components/pdf-text-content/pdf-text-content.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { VideoViewerComponent } from './components/video-viewer/video-viewer.component';
import { ViewerToolbarComponent } from './components/viewer-toolbar/viewer-toolbar.component';

const components = [
  GenericViewerComponent,
  ImageViewerComponent,
  PdfAcrofieldControlComponent,
  PdfAnchorComponent,
  PdfPageCanvasComponent,
  PdfTextContentComponent,
  PdfViewerComponent,
  FormItemFillerComponent,
  FormItemHeadingComponent,
  VideoViewerComponent,
  ViewerToolbarComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    AcksModule,
    ApplyModule,
    CommonModule,
    FormsModule,
    IconModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    NgClickOutsideDirective,
    RedactedModule,
    VisibleModule,
  ],
  exports: [
    ...components,
  ],
})
export class DocumentViewerModule { }
