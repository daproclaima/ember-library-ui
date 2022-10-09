import Route from '@ember/routing/route';
import { service } from '@ember/service';

import { AUTHOR } from '../constants/MODEL_NAMES';

export default class AuthorRoute extends Route {
  @service store;

  model() {
    return this.store.findAll(AUTHOR);
  }
}
