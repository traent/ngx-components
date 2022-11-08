import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngxT3FileDrop]',
})
export class FileDropDirective {
  @Output() readonly ngxT3FileDrop = new EventEmitter<FileList>();

  @HostBinding('class.fileover') fileOver = false;

  @HostListener('dragover', ['$event']) onDragOver($event: DragEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) onDragLeave($event: DragEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) onDrop($event: DragEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.fileOver = false;

    const files = $event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.ngxT3FileDrop.emit(files);
    }
  }
}
