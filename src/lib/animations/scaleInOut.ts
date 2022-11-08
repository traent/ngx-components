import { animate, style, transition, trigger } from '@angular/animations';

const params = {
  duration: '120ms',
  transformOrigin: 'top right',
  initalScale: 0.5,
  initialOpacity: 0,
};

export const scaleInOutAnimation = trigger('scaleInOutAnimation', [
  transition(':enter', [
    style({ transform: 'scale({{ initalScale }})', transformOrigin: '{{ transformOrigin }}', opacity: 0 }),
    animate('{{ duration }} cubic-bezier(0, 0, 0.2, 1)',
      style({ transform: 'scale(1)', opacity: 1 })),
  ], { params }),
  transition(':leave', [
    animate('{{ duration }} ease-in',
      style({ transform: 'scale({{ initalScale }})', opacity: '{{ initialOpacity }}' })),
  ], { params }),
]);
