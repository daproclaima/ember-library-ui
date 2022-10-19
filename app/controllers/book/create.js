import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { AUTHOR } from '../../constants/MODEL_NAMES';

export default class BookCreateController extends Controller {
  @service store;

  @action selectAuthor(author) {
    console.log('author : ', author);
  }

  @action async searchAuthor(query) {
    return await this.store.query(AUTHOR, { filter: { query } });
  }
}
