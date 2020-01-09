import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Test1 <=> Test2', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute'
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('2000ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('2000ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
