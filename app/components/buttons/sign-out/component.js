import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  router: service(),

  actions: {
    signOut() {
      return this.get('session').close().then(() => {
        this.get('router').transitionTo('login')
      });
    }
  }
});
