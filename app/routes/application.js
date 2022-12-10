import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { LOGIN } from '../constants/ROUTES_NAMES';

export default class ApplicationRoute extends Route {
  @service session;

  constructor() {
    super(...arguments);

    this.session.setup();

    this.session.handleInvalidation = () => {
      window.location.replace(`/${LOGIN}`);
    };
  }
}
