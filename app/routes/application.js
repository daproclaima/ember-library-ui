import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { LOGIN } from '../constants/ROUTES_NAMES';

export default class ApplicationRoute extends Route {
  /**
   * @description https://ember-simple-auth.com/api/classes/SessionService.html
   */
  @service session;
  @service currentUser;

  beforeModel() {
    this.loadUser();
  }

  constructor() {
    super(...arguments);

    this.session.setup();

    this.session.handleInvalidation = () =>
      window.location.replace(`/${LOGIN}`);

    this.session.handleAuthentication = () => this.loadUser();
  }

  loadUser() {
    if (this.session.isAuthenticated) this.currentUser.load();
  }
}
