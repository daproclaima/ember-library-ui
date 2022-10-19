import Model, { attr, belongsTo } from '@ember-data/model';
import { STRING, DATE } from '../constants/MODEL_ATTRIBUTES';
import { AUTHOR } from '../constants/MODEL_NAMES';

export default class BookModel extends Model {
  @attr(STRING) title;
  @attr(STRING) isbn;
  @attr(DATE) publishDate;
  @belongsTo(AUTHOR, { async: true, inverse: null }) author;
}
