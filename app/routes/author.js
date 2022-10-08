import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  model() {
    return [
      {
        firstName: 'J.K.',
        lastName: 'Rowling',
      },
      {
        firstName: 'Tom',
        lastName: 'Clancy',
      },
    ];
  }
}
