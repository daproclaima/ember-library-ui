import { module, test } from 'qunit';
import { setupTest } from 'library-ui/tests/helpers';

module('Unit | Transform | publish date', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let transform = this.owner.lookup('transform:publish-date');
    assert.ok(transform);
  });
});
