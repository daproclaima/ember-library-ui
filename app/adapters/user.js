import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  constructor() {
    super(...arguments);
  }

  urlForQueryRecord(query) {
    let url = this.buildURL();

    if (query.me) {
      delete query.me;

      url = `${url}/users/me`;
    }

    return url;
  }
}
