import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    if ( this.get('session.service') ) {
      this.transitionTo('ideas');
    }
  },

  actions: {
    signIn() {
      return this.get('session').open('firebase', { provider: 'google' }).then(() => {
        this.transitionTo('ideas');
      });
    }
  }
});
