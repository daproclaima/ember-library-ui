import Route from '@ember/routing/route';
import { service } from '@ember/service';

import { BOOK } from '../../constants/MODEL_NAMES';

export default class BookEditRoute extends Route {
  @service store;

  model({ id }) {
    return this.store.findRecord(BOOK, id);
  }
}
