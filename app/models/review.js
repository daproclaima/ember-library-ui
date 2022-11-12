import Model, { attr, belongsTo } from '@ember-data/model';
import { BOOK } from '../constants/MODEL_NAMES';

export default class ReviewModel extends Model {
  @attr user;
  @attr body;
  @attr createdAt;
  @belongsTo(BOOK, { async: true, inverse: null }) book;
}
