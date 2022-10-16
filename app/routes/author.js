import Route from '@ember/routing/route';
import { service } from '@ember/service';

import { AUTHOR } from '../constants/MODEL_NAMES';

export default class AuthorRoute extends Route {
  @service store;

  queryParams = {
    search: {
      refreshModel: true,
    },
  };

  async model({ search }) {
    let findAuthors = async () => this.store.findAll(AUTHOR);

    if (search) {
      findAuthors = async () =>
        this.store.query(AUTHOR, {
          filter: {
            query: search,
          },
        });
    }

    return await findAuthors();
  }
}
