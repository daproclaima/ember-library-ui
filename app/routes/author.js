import Route from '@ember/routing/route';
import { service } from '@ember/service';

import { AUTHOR } from '../constants/MODEL_NAMES';
// import { BUSINESS_API_ROUTE } from '../constants/BUSINESS_API_ROUTES'

export default class AuthorRoute extends Route {
  @service store;

  model() {
    return this.store.findAll(AUTHOR);
    // return fetch(BUSINESS_API_ROUTE + '/authors').then((response) =>
    //   response.json()
    // );
  }
}
