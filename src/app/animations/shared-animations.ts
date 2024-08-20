import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInLeft = trigger('slideInLeft', [
  state('void', style({
    transform: 'translateX(-20%)',
    opacity: 0
  })),
  state('*', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  transition('void => *', [
    animate('0.4s ease-in')
  ])
]);

export const slideInRight = trigger('slideInRight', [
  state('void', style({
    transform: 'translateX(20%)',
    opacity: 0
  })),
  state('*', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  transition('void => *', [
    animate('0.4s ease-in')
  ])
]);

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  state('*', style({
    opacity: 1
  })),
  transition('void <=> *', [
    animate('0.5s ease-in-out')
  ])
]);

export const zoomIn = trigger('zoomIn', [
  state('void', style({
    transform: 'scale(0.5)',
    opacity: 0
  })),
  state('*', style({
    transform: 'scale(1)',
    opacity: 1
  })),
  transition('void => *', [
    animate('0.5s ease-in-out')
  ])
]);

export const expandCollapse = trigger('expandCollapse', [
  state('void', style({
    height: '0px',
    opacity: 0,
    overflow: 'hidden',
    transform: 'scale(0.8)'
  })),
  state('*', style({
    height: '*',
    opacity: 1,
    overflow: 'hidden',
    transform: 'scale(1)'
  })),
  transition('void <=> *', [
    animate('0.3s ease-in-out')
  ])
]);

export const bounceIn = trigger('bounceIn', [
    state('void', style({
      transform: 'scale(0.5)',
      opacity: 0
    })),
    state('*', style({
      transform: 'scale(1)',
      opacity: 1
    })),
    transition('void => *', [
      animate('0.3s ease-out', style({ transform: 'scale(1.2)' })),
      animate('0.2s ease-in')
    ])
  ]);