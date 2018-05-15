import ReactComponent from 'kudo-starter/components/base/react-component'
import Idea from './Idea'

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments)
    this.reactRender(<Idea />)
  },
})
