import Route from '@ember/routing/route';
import { CREATE_AUTHOR_DEFAULT_MODEL } from '../../constants/FORM_DEFAULT_MODELS';

export default class AuthorCreateRoute extends Route {
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
