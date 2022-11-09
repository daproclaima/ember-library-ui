import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ReviewFormComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.onsubmit = args.onsubmit;
    this.user = args.review.user;
    this.body = args.review.body;
    this.book = args.review.book;
  }

  @action submitChanges(event) {
    event.preventDefault();

    this.onsubmit({
      user: this.user,
      body: this.body,
      book: this.book,
    });
  }
}
