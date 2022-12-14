import ApplicationRoute from './application';
import { INDEX } from '../constants/ROUTES_NAMES';
import { service } from '@ember/service';

export default class LoginRoute extends ApplicationRoute {
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
