import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private readonly sanitizer: DomSanitizer) { }

  transform(value: string) {
    return this.sanitizer.sanitize(SecurityContext.HTML, value);
  }
}
