import ReactComponent from 'kudo-starter/components/base/react-component'
import Filter from './Filter'

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments)
    this.reactRender(<Filter />)
  },
})
