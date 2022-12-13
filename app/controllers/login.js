import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;

  @tracked errors;

  @action login(attributes) {
    this.session
      .authenticate('authenticator:jwt', {
        email: attributes.email,
        password: attributes.password,
      })
      .catch((error) => {
        this.errors = error?.json?.errors;
      });
  }
}
