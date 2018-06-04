import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  session: service(),
  store: service(),

  actions: {
    addIdea() {
      let currentUser = this.get('session.currentUser');

      this.get('store')
        .createRecord('idea', {
          title: this.get('title'),
          shortDescription: this.get('shortDescription'),
          description: this.get('description'),
          image: this.get('image'),
          target: this.get('target'),
          inventorId: currentUser.id,
        })
        .save();

      this.get('router').transitionTo('ideas');
    }
  }
});
