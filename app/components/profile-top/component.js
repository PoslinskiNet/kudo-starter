import ReactComponent from 'kudo-starter/components/base/react-component'
import ProfileTop from './ProfileTop';

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments)
    this.reactRender(<ProfileTop />)
  },
})
