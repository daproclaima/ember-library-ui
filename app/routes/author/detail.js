import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { AUTHOR } from '../../constants/MODEL_NAMES';

export default class AuthorDetailRoute extends Route {
  @service store;

  model({ id }) {
    return this.store.findRecord(AUTHOR, id);
  }
}
