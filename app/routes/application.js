import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { INDEX, LOGIN } from '../constants/ROUTES_NAMES';

export default class ApplicationRoute extends Route {
  /**
   * @description https://ember-simple-auth.com/api/classes/SessionService.html
   */
  @service session;
  @service currentUser;
  @service router;

  beforeModel() {
    this.loadUser();
  }

  constructor() {
    super(...arguments);
    this.session.setup();

    // https://ember-simple-auth.com/api/classes/ApplicationRouteMixin.html#method_sessionInvalidated not used as we want to be redirected to login page
    // this.session.sessionInvalidated
    this.session.handleInvalidation = () =>
      window.location.replace(`/${LOGIN}`);

    // https://ember-simple-auth.com/api/classes/ApplicationRouteMixin.html#method_sessionAuthenticated is not more fitting than handleAuthentication
    // this.session.sessionAuthenticated = () => this.loadUser();
    this.session.handleAuthentication = () => {
      this.loadUser();

      if (this.session.isAuthenticated) {
        this.router.replaceWith(
          this.session?.attemptedTransition?.intent?.name || INDEX,
          this.session?.attemptedTransition?.intent.contexts[0]
        );
      }
    };
  }

  loadUser() {
    if (this.session.isAuthenticated) this.currentUser.load();
  }

  // afterModel(model) {
  // }
}
