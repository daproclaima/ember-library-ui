import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.user = args.user;
    this.onsubmit = args.onsubmit;
  }

  @action login(event) {
    event.preventDefault();
    this.onsubmit({
      email: this.user.email,
      password: this.user.password,
    });
  }
}
