import { QueryList, ElementRef } from '@angular/core';
import { createArray, unreachable } from '@traent/ts-utils';
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/types/display/api';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const getPages = (pdf: PDFDocumentProxy): Promise<PDFPageProxy[]> =>
  Promise.all(createArray(pdf.numPages, async (i) => pdf.getPage(i + 1)));

export const getCurrentPage = (pageElementRefs: QueryList<ElementRef>): Observable<number> => {
  const pageElements = pageElementRefs.map((ref) => ref.nativeElement);
  const elementIndexMap = new Map(pageElements.map((el, i) => [el, i]));
  return new Observable<Set<Element>>((observer) => {
    const visible = new Set<Element>();
    const inner = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.add(entry.target);
        } else {
          visible.delete(entry.target);
        }
      });
      observer.next(visible);
    }, {
      rootMargin: `-50% 0%`,
    });
    pageElements.forEach((el) => inner.observe(el));
    return () => {
      inner.disconnect();
    };
  }).pipe(
    map((elements) => 1 + Math.min(
      ...[...elements].map((element) => elementIndexMap.get(element) ?? unreachable()),
    )),
    filter((i) => i !== Infinity),
  );
};

export const scrollToPage = (page: PDFPageProxy, selector?: string): void => {
  const element = selector
    ? document.getElementById(selector)?.querySelector(`#page-${page.pageNumber}`)
    : document.getElementById(`page-${page.pageNumber}`);

  if (!element) {
    return;
  }
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};
