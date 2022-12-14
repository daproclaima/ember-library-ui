import ApplicationRoute from '../../application';
import { BOOK_DETAIL } from '../../../constants/ROUTES_NAMES';

export default class BookDetailIndexRoute extends ApplicationRoute {
  models() {
    return this.modelFor(BOOK_DETAIL);
  }
}
