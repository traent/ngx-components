import { Pipe, PipeTransform } from '@angular/core';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'escapeHtml',
})
export class EscapeHtmlPipe implements PipeTransform {

  // eslint-disable-next-line class-methods-use-this
  transform(value: string, allowed_tags: string[] = []) {
    return DOMPurify.sanitize(value, { ALLOWED_TAGS: allowed_tags, KEEP_CONTENT: true });
  }
}
