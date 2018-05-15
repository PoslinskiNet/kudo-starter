import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',

  store: service(),

  init() {
    this._super(...arguments);
    this.set('data', []);
  },

  didInsertElement() {
    this.get('query').perform();
  },

  query: task(function * () {
    const payload = yield this.get('store').findAll('idea');
    this.set('data', payload);
  }).restartable()
});
