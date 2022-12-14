import { service } from '@ember/service';
import { Ability } from 'ember-can';

export default class BookAbility extends Ability {
  @service currentUser;

  get canEdit() {
    return this.currentUser?.user?.username === this.model?.username;
  }

  get canCreate() {
    return this.canEdit;
  }

  get canDelete() {
    return this.canEdit;
  }
}
