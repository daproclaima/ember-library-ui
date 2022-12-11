import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { PUBLISH_DATE, STRING } from '../constants/MODEL_ATTRIBUTES';
import { AUTHOR, REVIEW } from '../constants/MODEL_NAMES';

export default class BookModel extends Model {
  @attr(STRING) title;
  @attr(STRING) isbn;
  @attr(STRING) username;
  @attr(PUBLISH_DATE) publishDate;
  @belongsTo(AUTHOR, { async: true, inverse: null }) author;
  @hasMany(REVIEW, { async: true, inverse: null }) reviews;
}
