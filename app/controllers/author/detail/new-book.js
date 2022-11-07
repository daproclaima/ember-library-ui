import Controller from '@ember/controller';
import { BOOK } from '../../../constants/MODEL_NAMES';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { AUTHOR_DETAIL } from '../../../constants/ROUTES_NAMES';

export default class AuthorDetailNewBookController extends Controller {
  @service store;
  @service router;

  @action saveBook(event) {
    event.preventDefault();
    const book = this.store.createRecord(BOOK, this.model.book);

    book.save().then(() => {
      this.router.transitionTo(AUTHOR_DETAIL, this.model.author.id);
    });
  }
}
