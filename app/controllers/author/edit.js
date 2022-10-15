import Controller from '@ember/controller';
import { action } from '@ember/object';
import { AUTHOR_INDEX } from '../../constants/ROUTES_NAMES';
import { service } from '@ember/service';

export default class AuthorEditController extends Controller {
  @service router;

  @action saveAuthor(formValues) {
    const { firstName, lastName } = formValues;

    this.model.set('firstName', firstName);
    this.model.set('lastName', lastName);

    this.model.save().then(() => {
      this.router.transitionTo(AUTHOR_INDEX);
    });
  }
}
