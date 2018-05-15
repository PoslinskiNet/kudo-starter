import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    // TODO: uncomment when ready
    // this.transitionTo(this.get('session.user') ? 'ideas' : 'login');
  }
});
