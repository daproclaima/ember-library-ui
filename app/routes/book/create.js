import Route from '@ember/routing/route';
import { LOGIN } from '../../constants/ROUTES_NAMES';
import { service } from '@ember/service';

export default class BookCreateRoute extends Route {
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
