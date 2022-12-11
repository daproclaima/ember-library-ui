import Model, { attr, hasMany } from '@ember-data/model';
import { STRING } from '../constants/MODEL_ATTRIBUTES';
import { BOOK } from '../constants/MODEL_NAMES';

export default class AuthorModel extends Model {
  @attr(STRING) firstName;
  @attr(STRING) lastName;
  @attr(STRING) username;
  @hasMany(BOOK, { async: true, inverse: null }) books;
}
