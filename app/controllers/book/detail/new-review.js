import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { REVIEW } from '../../../constants/MODEL_NAMES';
import { BOOK_DETAIL } from '../../../constants/ROUTES_NAMES';

export default class BookDetailNewReviewController extends Controller {
  @service store;
  @service router;

  @action saveReview(attributes) {
    const review = this.store.createRecord(REVIEW, attributes);

    review.save().then(() => {
      this.router.transitionTo(BOOK_DETAIL, this.model.book.id);
    });
  }
}
