import { service } from '@ember/service';
import { Ability } from 'ember-can';
import { tracked } from '@glimmer/tracking';

export default class AuthorAbility extends Ability {
  @service currentUser;

  @tracked model;

  get canEdit() {
    return this.currentUser?.user?.username === this.model?.username;
  }

  canDelete() {
    return this.canEdit && this.model?.books?.length === 0;
  }
}
