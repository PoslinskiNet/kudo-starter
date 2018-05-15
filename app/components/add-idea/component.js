import ReactComponent from 'kudo-starter/components/base/react-component'
import { inject as service } from '@ember/service';
import AddIdea from './AddIdea';

export default ReactComponent.extend({
  router: service(),
  session: service(),
  store: service(),

  didInsertElement() {
    this._super(...arguments)
    this.reactRender(<AddIdea addIdea={this.actions.addIdea.bind(this)}/>)
  },

  actions: {
    addIdea(data) {
      let currentUser = this.get('session.currentUser');

      this.get('store').createRecord('idea', {
        title: data.title,
        shortDescription: data.shortDescription,
        description: data.description,
        image: data.image,
        target: data.target,
        inventor: currentUser
      }).save();

      this.get('router').transitionTo('ideas');
    }
  }
});
