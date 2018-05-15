import ReactComponent from 'kudo-starter/components/base/react-component'
import List from './List'

export default ReactComponent.extend({
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

    this.reactRender(<List ideas={data} />, this.element)
  },
})
