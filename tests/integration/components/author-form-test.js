import { module, test } from 'qunit';
import { setupRenderingTest } from 'library-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | author-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuthorForm />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AuthorForm>
        template block text
      </AuthorForm>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
