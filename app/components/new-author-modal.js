import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { AUTHOR } from '../constants/MODEL_NAMES';
import { action } from '@ember/object';

export default class NewAuthorModalComponent extends Component {
  constructor() {
    super(...arguments);
    this.author = {
      firstName: '',
      lastName: '',
    };
  }
  @service store;

  @tracked isShowing = false;

  setIsShowing = (value) => {
    this.isShowing = value;
  };

  @action save(event) {
    event.preventDefault();
    console.log('this.author : ', this.author);
    const author = this.store.createRecord(AUTHOR, this.author);

    author.save().then(() => {
      this.isShowing = false;
      this.args.onsave(author);
    });
  }

  // @action setIsShowing(value) {
  //   this.isShowing = value;
  // }
}
