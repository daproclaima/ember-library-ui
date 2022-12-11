import Service from '@ember/service';
import { service } from '@ember/service';
import { USER } from '../constants/MODEL_NAMES';
import { tracked } from '@glimmer/tracking';

export default class CurrentUserService extends Service {
  @service session;
  @service store;
  @tracked user;

  load() {
    this.store.queryRecord(USER, { me: true }).then((user) => {
      this.user = user;
    });
  }
  // getUser() {
  //   let authenticatedData = this.session.data.authenticated;
  //   if (authenticatedData['authenticate:jwt']) {
  //     let jwt = authenticatedData['authenticate:jwt'];
  //     // Decode the JWT and return the user's data
  //     return decodeJWT(jwt);
  //   }
  // }
}
