import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { BOOK } from '../../constants/MODEL_NAMES';

export default class BookDetailController extends Controller {
  @service router;

  @action destroy(book) {
    book.destroyRecord().then(() => {
      this.router.transitionTo(BOOK);
    });
  }
}
