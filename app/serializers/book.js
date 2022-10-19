import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class BookSerializer extends JSONAPISerializer {
  serialize() {
    let json = super.serialize(...arguments);

    json.data.attributes = {
      isbn: json.data.attributes.isbn,
      title: json.data.attributes.title,
      publishDate: json.data.attributes.publishDate,
    };

    return json;
  }
}
