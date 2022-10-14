import Route from '@ember/routing/route';
import { CREATE_AUTHOR_DEFAULT_MODEL } from '../../constants/FORM_DEFAULT_MODELS';

export default class AuthorCreateRoute extends Route {
  constructor() {
    super(...arguments);
  }

  // /**
  //  * @function
  //  * @description https://api.emberjs.com/ember/4.7/classes/Route/methods/resetController?anchor=resetController
  //  * Ran when we enter and exit the route. In our case where we just manage one model, this method is overkill
  //  * @param controller
  //  * @param isExiting
  //  * @param transition
  //  * @deprecated
  //  */
  // resetController(controller, isExiting, transition) {
  //   if (isExiting && transition.targetName !== 'error') {
  //     controller.reset();
  //   }
  // }

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
