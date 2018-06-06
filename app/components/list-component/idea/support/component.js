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
      const amount = this.get('value');
      const user = this.get('user');
      const idea = this.get('idea');

      this.set('showButton', true);
      this.set('value', 1);

      this.get('store').createRecord('donation', { user, idea, amount }).save();
    },

    toggleSupport() {
      this.toggleProperty('showButton');
    }
  }
});
