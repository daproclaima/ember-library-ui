import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { AUTHOR } from '../constants/MODEL_NAMES';

export default class BookFormComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.onsubmit = args.onsubmit;
  }

  @service store;

  // auto-tracked by default since it comes from this.args
  book = {
    title: this.args.book.title,
    isbn: this.args.book.isbn,
    author: this.args.book.author,
    publishDate: this.args.book.publishDate,
  };

  @action submitChanges(event) {
    event.preventDefault();
    this.onsubmit(this.book);
  }

  @action async searchAuthor(query) {
    return await this.store.query(AUTHOR, { filter: { query } });
  }
}
