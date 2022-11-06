import Transform from '@ember-data/serializer/transform';
import { DateTime } from 'luxon';

export default class PublishDateTransform extends Transform {
  deserialize(serialized) {
    return DateTime.fromISO(serialized);
  }

  serialize(deserialized) {
    return deserialized;
  }
}
