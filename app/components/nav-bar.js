import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBar extends Component {
  @service session;
  @service currentUser;

  @action logout(event) {
    event.preventDefault();
    this.session.invalidate();
  }
}
