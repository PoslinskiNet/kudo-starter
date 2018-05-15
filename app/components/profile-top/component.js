import ReactComponent from 'kudo-starter/components/base/react-component'
import ProfileTop from './ProfileTop'
import { inject as service } from '@ember/service'

export default ReactComponent.extend({
  session: service(),

  didInsertElement() {
    this._super(...arguments)
    this.renderProfile()
  },

  renderProfile() {
    const user = this.get('session.currentUser')

    this.reactRender(<ProfileTop user={user} />, this.element)
  },
})
