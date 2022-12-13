import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { AUTHOR } from '../../constants/MODEL_NAMES';
import { AUTHOR_DETAIL, LOGIN } from '../../constants/ROUTES_NAMES';

export default class AuthorEditRoute extends Route {
  @service store;
  @service session;
  @service router;
  @service can;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, LOGIN);
  }

  model({ id }) {
    return this.store.findRecord(AUTHOR, id);
  }

  // takes model and transition
  afterModel(model) {
    // if (model.username !== this.currentUser.user.username)
    // with a return to make sur nothing is run after the transition
    if (!this.can.can('edit author', model))
      return this.router.replaceWith(AUTHOR_DETAIL, model.id);
  }
}
