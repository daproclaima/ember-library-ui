import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { service } from '@ember/service';
import { BUSINESS_API_ROUTE } from '../constants/BUSINESS_API_ROUTES';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = BUSINESS_API_ROUTE;

  /**
   * @description https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
   *   no need to use @tracked or computed. Using native get makes that this
   *   function is called whenever that property is looked up (by the user
   *   adapter for example).
   * @returns {{}}
   */
  get headers() {
    let headers = {};

    if (this.session.isAuthenticated) {
      headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return headers;
  }
}
