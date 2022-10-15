import JSONAPISerializer from '@ember-data/serializer/json-api';
import { camelize } from '@ember/string';

export default class AuthorSerializer extends JSONAPISerializer {
  /**
   * @function
   * @description https://guides.emberjs.com/release/models/customizing-serializers/#toc_customizing-serializers
   * @returns {*}
   */
  serialize() {
    let json = super.serialize(...arguments);

    json.data.attributes = {
      firstName: json.data.attributes.firstName,
      lastName: json.data.attributes.lastName,
    };

    return json;
  }

  keyForAttribute(attr) {
    return camelize(attr);
  }
}
