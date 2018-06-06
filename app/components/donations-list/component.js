import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  // TODO: remove this component.js file when data fetching ready from model on the backend
  // for mocking purpose we fetch all existing
  init() {
    this._super(...arguments);

    this.set('donations', this.get('store').findAll('donation'));
  },
});
