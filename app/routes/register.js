import ApplicationRoute from './application';
import { INDEX } from '../constants/ROUTES_NAMES';
import { service } from '@ember/service';

export default class RegisterRoute extends ApplicationRoute {
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
