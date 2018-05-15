import ReactComponent from 'kudo-starter/components/base/react-component'
import List from './List'

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments)
    this.reactRender(<List />)
  },
})
