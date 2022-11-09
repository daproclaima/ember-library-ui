import Component from '@glimmer/component';
// import { service } from '@ember/service';
import { action } from '@ember/object';
/**
 * @class
 * @description https://api.emberjs.com/ember/4.7/modules/@glimmer%2Fcomponent.
 * This component was created to break the two ways binding that was modifying
 * in the whole app the model provided here. But actually with Glimmer, whenever
 * we refer to a field with "this", Ember knows we do not want to modify the
 * model in the whole store. If I refer to "@author",
 * it updates the model in store.
 */
export default class AuthorFormComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.onsubmit = args.onsubmit;
  }

  // @service store;

  @action submitChanges(event) {
    event.preventDefault();

    this.onsubmit({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  // Useless updates on its own
  // constructor(owner, args) {
  //   super(owner, args);
  //
  //   if (this.author) {
  //     this.firstName = this.author.firstName;
  //     this.lastName = this.author.lastName;
  //   }
  // }

  // /**
  //  * @deprecated
  //  * @description ran at component mounting and on field updates but used on
  //  * Ember component,
  //  * not on Glimmer component
  //  */
  // didReceiveAttrs() {
  //   this.firstName = this.author.firstName;
  //   this.lastName = this.author.lastName;
  // }
}
