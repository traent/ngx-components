import { trigger, transition, style, animate } from '@angular/animations';

const params = {
  duration: '175ms',
  slideLength: '4px',
  initialOpacity: 0.75,
};

const makeFadeInOutAnimation = (name: string, enterDirection: 'top' | 'bottom' | 'right' | 'left') => {
  let transform;
  let transformOrigin;
  switch (enterDirection) {
    case 'top':
      transform = 'translateY({{ slideLength }})';
      transformOrigin = 'translateY(0)';
      break;
    case 'bottom':
      transform = 'translateY(-{{ slideLength }})';
      transformOrigin = 'translateY(0)';
      break;
    case 'left':
      transform = 'translateX({{ slideLength }})';
      transformOrigin = 'translateX(0)';
      break;
    case 'right':
      transform = 'translateX(-{{ slideLength }})';
      transformOrigin = 'translateX(0)';
  }
  return trigger(name, [
    transition(':enter', [
      style({ transform, opacity: '{{ initialOpacity }}' }),
      animate('175ms cubic-bezier(0.25, 0.1, 0.25, 1)',
        style({ transform: transformOrigin, opacity: 1 })),
    ], { params }),
    transition(':leave', [
      animate('175ms cubic-bezier(0.25, 0.1, 0.25, 1)',
        style({ transform, opacity: 0 })),
    ], { params }),
  ]);
};

export const fadeInTopAndOutAnimation = makeFadeInOutAnimation('fadeInTopAndOutAnimation', 'top');
export const fadeInTopBottomAndOutAnimation = makeFadeInOutAnimation('fadeInTopBottomAndOutAnimation', 'bottom');
export const fadeInRightAndOutAnimation = makeFadeInOutAnimation('fadeInRightAndOutAnimation', 'right');
export const fadeInLeftAndOutAnimation = makeFadeInOutAnimation('fadeInLeftAndOutAnimation', 'left');
