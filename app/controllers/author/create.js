import Controller from '@ember/controller';
import { action } from '@ember/object';
import {
  CREATE_AUTHOR_DEFAULT_MODEL
} from '../../constants/FORM_DEFAULT_MODELS'
// import { tracked } from '@glimmer/tracking';

export default class AuthorCreateController extends Controller {
  // /**
  //  * @deprecated
  //  */
  // constructor() {
  //   super(...arguments);
  //   this.formData = CREATE_AUTHOR_DEFAULT_MODEL;
  // }

  // /**
  //  * @deprecated
  //  */
  // @tracked formData;

  @action saveAuthor(event) {
    console.log('event.target : ', event.target);
  }

  // reset() {
  //   // does not work
  //   this.model = { ...CREATE_AUTHOR_DEFAULT_MODEL };
  //
  //   // this.formData = {
  //   //   firstName: '',
  //   //   lastName: '',
  //   // };
  // }
}
