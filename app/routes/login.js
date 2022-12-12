import Route from '@ember/routing/route';
import { INDEX } from '../constants/ROUTES_NAMES';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session;

  // @service router;

  beforeModel() {
    // if (this.session.isAuthenticated) {
    //   this.router.transitionTo(INDEX);
    // }
    this.session.prohibitAuthentication(INDEX);
  }

  model() {
    return {
      email: '',
      password: '',
    };
  }
}
