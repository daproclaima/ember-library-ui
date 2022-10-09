import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { AUTHOR } from '../../constants/MODEL_NAMES';

export default class AuthorDetailController extends Controller {
  @service router;

  @action async deleteAuthor(author, event) {
    await author.destroyRecord();
    this.router.transitionTo(AUTHOR + '.index');
  }
}
