import { ListKeyManager } from '@angular/cdk/a11y';
import {
  Component,
  QueryList,
  HostListener,
  HostBinding,
  ElementRef,
  Output,
  EventEmitter,
  ContentChildren,
  AfterContentInit,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { NgxT3ListItemDirective } from './list-item.directive';

@Component({
  selector: 'ngx-t3-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxT3ListComponent implements AfterContentInit, OnDestroy {

  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';

  @HostBinding('tabindex') tabIndex = '0';
  @ContentChildren(NgxT3ListItemDirective) items?: QueryList<NgxT3ListItemDirective>;
  @Output() readonly selectItem = new EventEmitter<string>();

  keyManager?: ListKeyManager<NgxT3ListItemDirective>;
  listActive = false;
  mouseItem: NgxT3ListItemDirective | null = null;
  activeId: string | undefined;
  currentDevice: 'mouse' | 'keyboard' = 'mouse';
  private readonly onDestroy$ = new Subject<void>();

  constructor(private readonly element: ElementRef) { }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngAfterContentInit() {
    this._initKeyManager();
    this.items?.changes.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      // we keep the previous activeId if the active item is still present
      if (this.activeId && this.items) {
        const previousActive = this.items.find((item) => item?.id === this.activeId);
        this.activeId = previousActive ? previousActive.getId() : undefined;
      }
      this._initKeyManager();
    });
  }

  @HostListener('mousemove') mouseMoveList() {
    this.currentDevice = 'mouse';
    this.listActive = true;
  }

  @HostListener('mouseenter') mouseEnterList() {
    this.listActive = true;
    this._updateItemsState();
  }

  @HostListener('mouseleave') mouseLeaveList() {
    this.listActive = false;
    this._updateItemsState();
  }

  /**
   * When we focus the list and there is no hovering, we want to automatically select the first item.
   */
  @HostListener('focusin', ['$event'])
  focusin(event: any) {
    this.listActive = true;
    if (this._isListEvent(event)) {
      if (this.keyManager && !this.mouseItem && !this.keyManager.activeItem) {
        this.keyManager.setFirstItemActive();
        this._focusActiveElement();
      }
      this._setActiveIdAndUpdateItemsState();
    }
  }

  /**
   * When the list lose focus we want to unset the active state.
   */
  @HostListener('focusout', ['$event'])
  focusout(event: any) {
    if (this._isListEvent(event)) {
      this.listActive = false;
      this.activeId = undefined;
      this._updateItemsState();
    }
  }

  /**
   * Lets update the active item or emit the selected when a keyboard event occur.
   */
  @HostListener('keydown', ['$event'])
  onElementKeyDown(event: any) {
    this.currentDevice = 'keyboard';
    switch (event.key) {
      case 'Enter': {
        this._emitSelectItem(this.keyManager?.activeItem?.id);
        event.stopPropagation();
        break;
      }
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowUp': {
        if (this.keyManager && this.isAllowedDirectionKey(event.key)) {
          if (this.keyManager.activeItem) {
            this.keyManager.onKeydown(event);
            this._setActiveIdAndUpdateItemsState();
            this._focusActiveElement();
            this._focusList();
          } else {
            this.keyManager.setFirstItemActive();
            this._setActiveIdAndUpdateItemsState();
            this._focusActiveElement();
            this._focusList();
          }
          event.stopPropagation();
        }
        break;
      }
    }
  }

  /**
   * Let's intercept keyboard ArrowUp/ArrowDown events from outside to handle 2 cases:
   * 1) When the list is not active but there is an item hovered
   * 2) When the list is active via mouse
   * then select the next item starting from the mouse item.
   */
  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    const mouseWasInCharge = this.currentDevice === 'mouse';
    this.currentDevice = 'keyboard';

    if (!this.isAllowedDirectionKey(event.key)) {
      return;
    }

    const focusedButMouseInCharge = this.listActive && this.mouseItem && mouseWasInCharge;
    const notFocusedButMouseIn = mouseWasInCharge && !this.listActive && this.mouseItem;

    if (this.mouseItem && this.keyManager && (focusedButMouseInCharge || notFocusedButMouseIn)) {
      this.keyManager.setActiveItem(this.mouseItem);
      this.keyManager.onKeydown(event);
      this._setActiveIdAndUpdateItemsState();
      event.stopPropagation();
      this._focusActiveElement();
      this._focusList(); // this switch to the 'keydown' element listener on the next iteration
    }
  }

  onMouseMove(item: NgxT3ListItemDirective) {
    this.mouseItem = item;
    this._setActiveIdAndUpdateItemsState(item);
  }

  onMouseEnter(item: NgxT3ListItemDirective) {
    if (this.currentDevice !== 'mouse') {
      // We discard events that could occur in reaction of keyboard scrolling (a scrolled item hit the pointer).
      return;
    }
    if (this.listActive) {
      this.keyManager?.setActiveItem(item);
    }
    this.mouseItem = item;
    this._setActiveIdAndUpdateItemsState(item);
  }

  onMouseLeave(item: NgxT3ListItemDirective) {
    if (this.currentDevice !== 'mouse') {
      // We discard events that could occur in reaction of keyboard scrolling (a scrolled item leave the pointer).
      return;
    }
    this.mouseItem = null;
    if (item?.id === this.activeId) {
      this.activeId = undefined;
    }
  }

  onMouseClick(item: NgxT3ListItemDirective) {
    this.mouseItem = item;
    this.listActive = true;
    this._emitSelectItem(item.id);
  }

  // IMPL

  private isAllowedDirectionKey(key: string) {
    if (this.orientation === 'vertical') {
      return key === 'ArrowUp' || key === 'ArrowDown';
    }
    return key === 'ArrowLeft' || key === 'ArrowRight';
  }

  private _isListEvent(event: any) {
    return event.relatedTarget && !this.element.nativeElement.contains(event.relatedTarget);
  }

  private _focusList() {
    this.element.nativeElement.focus();
  }

  private _focusActiveElement() {
    if (this.keyManager) {
      const activeItem = this.keyManager.activeItem;
      if (activeItem) {
        activeItem.focusElement();
      }
    }
  }

  private _updateItemsState() {
    // FIXME: ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.items?.forEach((item) => {
        item.active = this.listActive
          ? this.activeId !== undefined && this.activeId === item?.id
          : false;
        item.viaKeyboard = this.currentDevice === 'keyboard';
        item.viaMouse = this.currentDevice === 'mouse';
      });
    });
  }

  private _setActiveIdAndUpdateItemsState(item?: NgxT3ListItemDirective) {
    if (item) {
      this.activeId = item.id;
    } else if (this.keyManager && this.keyManager.activeItem !== null) {
      this.activeId = this.keyManager.activeItem ? (this.keyManager.activeItem as NgxT3ListItemDirective)?.id : undefined;
    } else {
      this.activeId = undefined;
    }
    this._updateItemsState();
  }

  private _emitSelectItem(id: string | undefined) {
    if (id !== undefined) {
      this.selectItem.next(id);
    }
  }

  private _initKeyManager() {
    if (!this.items) {
      return;
    }

    this.keyManager = new ListKeyManager(this.items)
      .withWrap()
      .withVerticalOrientation(this.orientation === 'vertical')
      .withHorizontalOrientation(this.orientation === 'horizontal' ? 'ltr' : null);

    if (this.items && this.activeId) {
      let activeIndex: number | undefined;
      this.items.forEach((i, index) => {
        if (i && i.getId() === this.activeId) {
          activeIndex = index;
        }
      });
      if (activeIndex !== undefined) {
        this.keyManager.setActiveItem(activeIndex);
      }
    }
    this._updateItemsState();
  }

}
