import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    this.get('session').set('user', {
      avatarUrl: "https://lh5.googleusercontent.com/-lWm6H2F14S4/AAAAAAAAAAI/AAAAAAAAAGw/I7wWZ51C0CA/photo.jpg",
      id : "L4rZFdUfAnO9y96feaJ5aOJg98L2",
      name: "Dawid Pośliński"
    });

    // TODO: uncomment when ready
    // this.transitionTo(this.get('session.user') ? 'ideas' : 'login');
  }
});
