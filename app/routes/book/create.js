import ApplicationRoute from '../application';
import { LOGIN } from '../../constants/ROUTES_NAMES';
import { service } from '@ember/service';

export default class BookCreateRoute extends ApplicationRoute {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, LOGIN);
  }

  model = () => ({
    title: '',
    isbn: '',
    publishDate: null,
    author: null,
  });
}
