import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { USER } from '../constants/MODEL_NAMES';
import { INDEX } from '../constants/ROUTES_NAMES';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {
  @service store;

  @service router;

  @tracked errors;

  @action saveUser(attributes) {
    const user = this.store.createRecord(USER, attributes);

    user
      .save()
      .then(() => this.router.transitionTo(INDEX))
      .catch(() => {
        this.model = attributes;
        this.errors = user.errors;
      });
  }
}
