import ApplicationRoute from '../../application';

export default class AuthorDetailNewBookRoute extends ApplicationRoute {
  model() {
    const author = this.modelFor('author.detail');

    return {
      author,
      book: {
        title: '',
        isbn: '',
        publishDate: '',
        author,
      },
    };
  }
}
