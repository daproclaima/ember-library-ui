import ApplicationRoute from '../../application';
import { BOOK_DETAIL } from '../../../constants/ROUTES_NAMES';

export default class BookDetailNewReviewRoute extends ApplicationRoute {
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
