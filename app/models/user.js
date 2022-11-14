import Model, { attr } from '@ember-data/model';
import { STRING } from '../constants/MODEL_ATTRIBUTES';

export default class AuthorModel extends Model {
  @attr(STRING) email;
  @attr(STRING) username;
  @attr(STRING) password;
  @attr(STRING) passwordConfirmation;
}
