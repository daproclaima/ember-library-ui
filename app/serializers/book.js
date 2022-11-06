import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class BookSerializer extends JSONAPISerializer {
  serialize() {
    let json = super.serialize(...arguments);

    json.data.attributes = {
      isbn: json.data.attributes.isbn,
      title: json.data.attributes.title,
      'publish-date': json.data.attributes?.['publish-date'],
    };

    return json;
  }
}
