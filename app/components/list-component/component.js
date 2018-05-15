import ReactComponent from 'kudo-starter/components/base/react-component'
import List from './List'
import { inject as service } from '@ember/service'

export default ReactComponent.extend({
  store: service(),
  session: service(),

  didInsertElement() {
    this.renderList()
  },

  didReceiveAttrs() {
    this._super(...arguments)

    if (this.get('component')) {
      this.get('component').forceUpdate();
    }
  },

  renderList() {
    const ideas = this.get('ideas')
    const data = ideas.map(idea => ({
      id: idea.get('id'),
      title: idea.get('title'),
      description: idea.get('description'),
      shortDescription: idea.get('shortDescription'),
      image: idea.get('image'),
      target: idea.get('target'),
      inventor: idea.get('inventor'),
    }))

    const component = this.reactRender(
      <List ideas={data} giveKudos={this.actions.giveKudos.bind(this)} />,
      this.element,
    )

    this.set('component', component);

    return component;
  },

  actions: {
    giveKudos(id, amount) {
      const store = this.get('store')
      const user = this.get('session.currentUser')
      const idea = store.peekRecord('idea', id)

      return this.get('store').createRecord('donation', {
        user,
        idea,
        amount,
      })
    },
  },
})
