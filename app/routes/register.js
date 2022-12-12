import Route from '@ember/routing/route';
import { INDEX } from '../constants/ROUTES_NAMES';
import { service } from '@ember/service';

export default class RegisterRoute extends Route {
  @service session;

  beforeModel() {
    this.session.prohibitAuthentication(INDEX);
  }

  model() {
    return {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    };
  }
}
