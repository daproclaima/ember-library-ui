import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { BOOK } from '../../constants/MODEL_NAMES';
import { BOOK_DETAIL } from '../../constants/ROUTES_NAMES';

export default class BookEditController extends Controller {
  @service store;
  @service router;

  @action async saveBook(attrs) {
    let book = await this.store.findRecord(BOOK, this.model.id);

    book.title = attrs.title;
    book.isbn = attrs.isbn;
    book.publishDate = attrs.publishDate;
    book.author = attrs.author;

    book.save().then(() => {
      this.router.transitionTo(BOOK_DETAIL, this.model.id);
    });
  }
}
