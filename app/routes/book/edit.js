import ApplicationRoute from '../application';
import { service } from '@ember/service';
import { BOOK } from '../../constants/MODEL_NAMES';
import { BOOK_DETAIL } from '../../constants/ROUTES_NAMES';

export default class BookEditRoute extends ApplicationRoute {
  @service store;
  @service session;
  @service can;
  @service router;

  model({ id }) {
    return this.store.findRecord(BOOK, id);
  }

  afterModel(model) {
    if (!this.can.can('edit book', model))
      return this.router.replaceWith(BOOK_DETAIL, model.id);
  }
}
