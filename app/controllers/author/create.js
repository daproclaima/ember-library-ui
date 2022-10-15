import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { AUTHOR } from '../../constants/MODEL_NAMES';
import { AUTHOR_INDEX } from '../../constants/ROUTES_NAMES';

export default class AuthorCreateController extends Controller {
  @service store;
  @service router;

  @action saveAuthor(event) {
    event.preventDefault();
    // console.log('event.target : ', event.target);
    // console.log('this.model : ', this.model);

    let author = this.store.createRecord(AUTHOR, this.model);

    // equals await author.save(). If save is not called, it only creates a local copy
    // author.save().then(() => {});

    author.save().then(() => {
      // https://deprecations.emberjs.com/ember/v3.x/#toc_routing-transition-methods
      this.router.transitionTo(AUTHOR_INDEX);
    });
  }
}
