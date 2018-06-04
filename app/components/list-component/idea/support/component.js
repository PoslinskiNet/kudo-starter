import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  session: service(),

  value: 1,
  showButton: true,

  user: alias('session.currentUser'),

  actions: {
    giveKudos() {
      this.set('showButton', true);
      this.set('value', 1);

      this.get('store').createRecord('donation', {
        user: this.get('user'),
        idea: this.get('idea'),
        amount: this.get('value')
      });
    },

    toggleSupport() {
      this.toggleProperty('showButton');
    }
  }
});
