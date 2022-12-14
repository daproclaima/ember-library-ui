import { service } from '@ember/service';
import { BOOK } from '../constants/MODEL_NAMES';
import ApplicationRoute from './application';

export default class BookRoute extends ApplicationRoute {
  @service store;
  queryParams = {
    search: {
      refreshModel: true,
    },
  };

  async model({ search }) {
    let findBooks = async () => this.store.findAll(BOOK);

    if (search) {
      findBooks = async () =>
        this.store.query(BOOK, {
          filter: {
            query: search,
          },
        });
    }

    return await findBooks();
  }
}
