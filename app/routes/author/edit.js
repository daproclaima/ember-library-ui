import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { AUTHOR } from '../../constants/MODEL_NAMES';
import { LOGIN } from '../../constants/ROUTES_NAMES';

export default class AuthorEditRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, LOGIN);
  }

  model({ id }) {
    return this.store.findRecord(AUTHOR, id);
  }
}
