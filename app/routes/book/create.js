import Route from '@ember/routing/route';

export default class BookCreateRoute extends Route {
  model = () => ({
    title: '',
    isbn: '',
    publishDate: null,
    author: null,
  });
}
