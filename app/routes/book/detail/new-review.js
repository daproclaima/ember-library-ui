import Route from '@ember/routing/route';
import { BOOK_DETAIL } from '../../../constants/ROUTES_NAMES';

export default class BookDetailNewReviewRoute extends Route {
  model() {
    let book = this.modelFor(BOOK_DETAIL);

    return {
      book,
      review: {
        user: '',
        body: '',
        book,
      },
    };
  }
}
