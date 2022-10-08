import Route from '@ember/routing/route';
// import { AUTHORS_ROUTE } from '../../constants/BUSINESS_API_ROUTES';

export default class AuthorRoute extends Route {
  model() {
    return fetch('http://localhost:3000/authors/').then(response => response.json());
  }
}
