import {
  AUTHOR_DETAIL_INDEX,
  AUTHOR_INDEX,
  BOOK_DETAIL_INDEX,
  BOOK_INDEX,
} from './constants/ROUTES_NAMES';

const duration = 600;

const slidingCardIn = [
  {
    pickNew: '.slide-out-bg',
    use: ['fade', { duration }],
  },
  {
    pickNew: '.slide-out-card',
    use: ['wait', duration, { then: 'toLeft' }, { duration }],
  },
];

const slidingCardOut = [
  {
    pickOld: '.slide-out-bg',
    use: ['wait', duration, { then: 'fade' }, { duration }],
  },
  {
    pickOld: '.slide-out-card',
    use: ['toRight', { duration }],
  },
];

export default function () {
  // Add your transitions here, like:
  this.transition(
    this.hasClass('liquid-form-new-author'),
    this.use('fade', { duration })
  );

  this.transition(
    this.fromRoute(BOOK_DETAIL_INDEX),
    this.use('toLeft', { duration }),
    this.reverse('toRight', { duration })
  );

  this.transition(
    this.fromRoute(AUTHOR_DETAIL_INDEX),
    this.use('fade', { duration }),
    this.reverse('fade', { duration })
  );

  this.transition(
    this.fromRoute(AUTHOR_INDEX),
    this.use('explode', ...slidingCardIn),
    this.reverse('explode', ...slidingCardOut)
  );

  this.transition(
    this.fromRoute(BOOK_INDEX),
    this.use('explode', ...slidingCardIn),
    this.reverse('explode', ...slidingCardOut)
  );
}
