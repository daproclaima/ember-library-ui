import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { AUTHOR } from '../constants/MODEL_NAMES';

export default class BookRoute extends Route {
  @service store;

  async model() {
    return {
      title: '',
      isbn: '',
      publishDate: null,
      author: null,
    };
  }
}
