import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ReviewSerializer extends JSONAPISerializer {
  serialize() {
    return super.serialize(...arguments);
  }
}
