import Component from '@ember/component';
import { computed } from '@ember/object';

const defaultIdeaImage = 'http://www.garstangicecreamfestival.co.uk/wp-content/uploads/2017/11/pexels-photo-461430-360x240.jpeg';
const defaultInventorImage = 'https://www.fancyhands.com/images/default-avatar-250x250.png';

export default Component.extend({
  classNames: ['col-md-4'],

  inventorImage: computed('idea.avatarUrl', function() {
    return this.get('idea.avatarUrl') || defaultInventorImage;
  }),

  ideaImage: computed('idea.image', function() {
    return this._isValidURL(this.get('idea.image')) ? this.get('idea.image') : defaultIdeaImage;
  }),

  _isValidURL(str) {
    const a = document.createElement('a');
    a.href = str;
    return a.host && a.host != window.location.host;
  }
});
