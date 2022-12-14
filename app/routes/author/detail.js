import ApplicationRoute from '../application';
import { service } from '@ember/service';
import { AUTHOR } from '../../constants/MODEL_NAMES';

export default class AuthorDetailRoute extends ApplicationRoute {
  @service store;

  async model({ id }) {
    return await this.store.findRecord(AUTHOR, id);
  }

  afterModel(model) {
    return model.books;
  }
}
