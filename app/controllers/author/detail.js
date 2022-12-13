import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { AUTHOR } from '../../constants/MODEL_NAMES';

export default class AuthorDetailController extends Controller {
  @service router;
  @service can;

  @action async deleteAuthor(author) {
    if (this.can.can('delete author', author)) {
      await author.destroyRecord();
      this.router.transitionTo(AUTHOR);
    }
  }
}
