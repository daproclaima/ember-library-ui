import { service } from '@ember/service';
import { Ability } from 'ember-can';
// import { alias } from '@ember/object/computed';

export default class BookAbility extends Ability {
  @service currentUser;
  @service session;

  // not with native class
  // @alias('session.isAuthenticated') canCreate;

  get canCreate() {
    return this.session.isAuthenticated;
  }
}
