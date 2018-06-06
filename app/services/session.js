import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  init() {
    this._super(...arguments);

    this.get('store').findRecord('user', 'L4rZFdUfAnO9y96feaJ5aOJg98L2').then(user => {
      this.set('currentUser', user);
    });
  }
});
