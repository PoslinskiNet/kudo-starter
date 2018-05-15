import ReactComponent from 'kudo-starter/components/base/react-component'
import List from './List'
import { inject as service } from '@ember/service';

export default ReactComponent.extend({
  store: service(),
  session: service(),

  didInsertElement() {
    this._super(...arguments)
    this.renderList()
  },

  renderList() {
    const ideas = this.get('ideas')
    const data = ideas.map(idea => ({
      id: idea.get('id'),
      title: idea.get('title'),
      description: idea.get('description'),
    }))

    this.reactRender(
      <List
        ideas={data}
        giveKudos={this.actions.giveKudos.bind(this)}
      />,
      this.element
    )
  },

  actions: {
    giveKudos(id, amount) {
      const store = this.get('store');
      const user = this.get('session.currentUser');
      const idea = this.get('store').peekRecord('idea', id);

      return this.get('store').createRecord('donate', {
        user,
        idea,
        amount,
      })
    }
  }
})
