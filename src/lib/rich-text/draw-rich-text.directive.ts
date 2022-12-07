import { Directive, ViewContainerRef, OnInit, Input, Component, ChangeDetectionStrategy } from '@angular/core';

import { decodeHtml, extractFeature, TextResource, TextType } from './rich-text.utils';

const RE_CODE_BLOCK = /(?<text>[\S\s]*?)```\r?\n?(?<feature>[\S\s]*?\r?\n?)```/;
const RE_ITALIC_BOLD = /(?<text>[\S\s]*?)\*\*\*\r?\n?(?<feature>[\S\s]*?\r?\n?)\*\*\*/;
const RE_BOLD = /(?<text>[\S\s]*?)\*\*\r?\n?(?<feature>[\S\s]*?\r?\n?)\*\*/;
const RE_ITALIC = /(?<text>[\S\s]*?)_r?\n?(?<feature>[\S\s]*?\r?\n?)_/;
// eslint-disable-next-line max-len
const RE_URL = /(?<text>[\S\s]*?)r?\n?(?<feature>https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/;

@Directive({
  selector: '[ngxT3DrawRichText]',
})
export class DrawRichTextDirective implements OnInit {
  @Input() ngxT3DrawRichText!: string;

  constructor(private readonly viewcontainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    const value = decodeHtml(this.ngxT3DrawRichText);
    let textResources: TextResource[] = [{ type: TextType.Simple, value }];
    textResources = extractFeature(textResources, RE_CODE_BLOCK, TextType.BlockCode);
    textResources = extractFeature(textResources, RE_URL, TextType.Url);
    textResources = extractFeature(textResources, RE_ITALIC_BOLD, TextType.ItalicBold);
    textResources = extractFeature(textResources, RE_BOLD, TextType.Bold);
    textResources = extractFeature(textResources, RE_ITALIC, TextType.Italic);

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let index = 0; index < textResources.length; index++) {
      const resource = textResources[index];
      if ([TextType.ItalicBold, TextType.Italic, TextType.Bold, TextType.Simple].includes(resource.type)) {
        const textComponent = this.viewcontainerRef.createComponent(TextComponent);
        textComponent.instance.text = resource.value || '';
        textComponent.instance.italic = [TextType.ItalicBold, TextType.Italic].includes(resource.type);
        textComponent.instance.bold = [TextType.ItalicBold, TextType.Bold].includes(resource.type);
      } else if (resource.type === TextType.BlockCode) {
        const codeBlockComponent = this.viewcontainerRef.createComponent(CodeBlockComponent);
        codeBlockComponent.instance.code = resource.value || '';
      } else if (resource.type === TextType.Url) {
        const codeBlockComponent = this.viewcontainerRef.createComponent(LinkComponent);
        codeBlockComponent.instance.link = resource.value || '';
      }
    }
  }
}

@Component({
  template: `<div class="opal-d-block opal-text-code opal-body-2 opal-text-grey-500 opal-p-2 opal-radius-4 code-block">{{ code }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class CodeBlockComponent {
  @Input() code!: string;
}

@Component({
  template: `
    <a
      class="opal-pointer opal-text-underline opal-text-accent-700"
      target="_blank"
      [href]="link">{{ link }}</a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class LinkComponent {
  @Input() link!: string;
}

@Component({
  template: `
  <span
    class="tw-whitespace-pre"
    [ngClass]="{
      'opal-text-bold': bold,
      'opal-text-style-italic': italic
    }">{{ text }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() text!: string;
  @Input() italic?: boolean;
  @Input() bold?: boolean;
}
