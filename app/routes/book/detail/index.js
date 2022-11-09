import Route from '@ember/routing/route';
import { BOOK_DETAIL } from '../../../constants/ROUTES_NAMES';

export default class BookDetailIndexRoute extends Route {
  models() {
    return this.modelFor(BOOK_DETAIL);
  }
}
