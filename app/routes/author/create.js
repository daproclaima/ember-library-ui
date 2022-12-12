import Route from '@ember/routing/route';
import { CREATE_AUTHOR_DEFAULT_MODEL } from '../../constants/FORM_DEFAULT_MODELS';
import { LOGIN } from '../../constants/ROUTES_NAMES';
import { service } from '@ember/service';

// No mixins https://github.com/emberjs/rfcs/issues/534
// import AuthenticatedRouteMixin from 'ember-simple-auth/addon/mixins/authenticated-route-mixin'
// export default class AuthorCreateRoute extends Route.extend(AuthenticatedRouteMixin) {

export default class AuthorCreateRoute extends Route {
  @service session;

  beforeModel(transition) {
    // if (!this.session.isAuthenticated) {
    //   this.router.transitionTo(LOGIN);
    // }
    this.session.requireAuthentication(transition, LOGIN);
  }

  /**
   * @function
   * @description run everytime we enter the route (as if it was a predefined
   * callback called every time at component did mount on React).
   * @returns {{firstName: string, lastName: string}}
   */
  model() {
    return { ...CREATE_AUTHOR_DEFAULT_MODEL };
  }
}
