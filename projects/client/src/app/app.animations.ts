import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';

export const pageTransitions = trigger('routeAnimations', [
	transition(':enter, :leave', []),
	transition('* <=> *', [
		style({ position: 'relative' }),
		// query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
		query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })], { optional: true }),
		query(':enter', [style({ transformOrigin: '50% 50vh', transform: 'perspective(500px) translateZ(100px)', opacity: 0 })]),
		query(':leave', animateChild(), { optional: true }),
		query(':leave', [style({ transformOrigin: '50% 50vh', transform: 'perspective(500px) translateZ(0)', opacity: 1 })], { optional: true }),
		/*
		group([
			query(':leave', [ animate('300ms ease-out', style({ transform: 'perspective(500px) translateZ(-100px)', opacity: 0 })) ], { optional: true }),
			query(':enter', [ animate('300ms ease-out', style({ transform: 'perspective(500px) translateZ(0)', opacity: 1 })) ])
		]),
		*/
		query(':leave', [animate('300ms ease-out', style({ transform: 'perspective(500px) translateZ(100px)', opacity: 0 }))], { optional: true }),
		query(':enter', [animate('300ms ease-out', style({ transform: 'perspective(500px) translateZ(0)', opacity: 1 }))]),
		query(':enter', animateChild()),
	])
]);
