import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { BOOK } from '../../constants/MODEL_NAMES';
import { tracked } from '@glimmer/tracking';

export default class BookDetailController extends Controller {
  @service router;
  @service can;

  @tracked model;

  @action destroy() {
    if (this.can.can('delete book', this.model))
      this.model.destroyRecord().then(() => {
        this.router.transitionTo(BOOK);
      });
  }
}
