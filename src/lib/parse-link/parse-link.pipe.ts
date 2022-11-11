import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const RE_LINK = /\b(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/gi;

@Pipe({ name: 'parseLink' })
export class ParseLinkPipe implements PipeTransform {

  constructor(private readonly domSanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    const links = new Set(value.match(RE_LINK) || []);
    for (const link of links) {
      const linkRegex = link.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape regex special characters
      const linkWithProtocol = link.includes('http') ? link : `http://${link}`;
      value = value.replace(new RegExp(linkRegex, 'g'), `<a href='${linkWithProtocol}' target='_blank'>${link}</a>`);
    }
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
}
