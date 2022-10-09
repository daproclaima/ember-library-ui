import Model, { attr } from '@ember-data/model';
import { STRING } from '../constants/MODEL_ATTRIBUTES';

export default class AuthorModel extends Model {
  @attr(STRING) firstName;
  @attr(STRING) lastName;
}
