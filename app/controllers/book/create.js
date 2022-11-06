import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { AUTHOR, BOOK } from '../../constants/MODEL_NAMES';
import { BOOK_INDEX } from '../../constants/ROUTES_NAMES';

export default class BookCreateController extends Controller {
  @service store;
  @service router;

  @action async searchAuthor(query) {
    return await this.store.query(AUTHOR, { filter: { query } });
  }

  @action saveBook(attributes) {
    const book = this.store.createRecord(BOOK, attributes);

    book.save().then(() => this.router.transitionTo(BOOK_INDEX));
  }
}
