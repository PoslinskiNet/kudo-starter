import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('ideas', function() {
    this.route('idea', { path: 'idea/:idea_id' });
    this.route('new');
  });
});

export default Router;
