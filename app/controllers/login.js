import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { INDEX } from '../constants/ROUTES_NAMES';

export default class LoginController extends Controller {
  @service session;

  @service router;

  @tracked errors;

  @action login(attributes) {
    this.session
      .authenticate('authenticator:jwt', {
        email: attributes.email,
        password: attributes.password,
      })
      .then(() => {
        if (this.session.isAuthenticated)
          this.router.transitionTo(
            this.session?.attemptedTransition?.intent?.name || INDEX
          );
      })
      .catch((error) => {
        this.errors = error.json.errors;
      });
  }
}
