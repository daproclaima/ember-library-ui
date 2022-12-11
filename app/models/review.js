import Model, { attr, belongsTo } from '@ember-data/model';
import { BOOK } from '../constants/MODEL_NAMES';
import { STRING } from '../constants/MODEL_ATTRIBUTES';

export default class ReviewModel extends Model {
  @attr(STRING) username;
  @attr body;
  @attr createdAt;
  @belongsTo(BOOK, { async: true, inverse: null }) book;
}
