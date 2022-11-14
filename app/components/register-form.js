import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RegisterFormComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.user = args.user;
    this.onsubmit = args.onsubmit;
  }

  user;

  @action async saveUser(event) {
    event.preventDefault();

    await this.onsubmit({
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      passwordConfirmation: this.user.passwordConfirmation,
    });
  }
}
