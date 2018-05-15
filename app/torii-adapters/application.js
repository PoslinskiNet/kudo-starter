import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default ToriiFirebaseAdapter.extend({
  store: service(),
  open(authentication) {
    return hash({
      uid: authentication.uid,
      currentUser: this._findOrCreateUser(authentication)
    })
  },
  _findOrCreateUser({uid, photoURL: avatarUrl, displayName: name}) {
    const store = this.get('store');

    return store.findRecord('user', uid)
      .then( function (user) {
        user.setProperties(avatarUrl, name);
        return user.save();
      })
      .catch(function() {
        let user = store.createRecord('user', {avatarUrl, name, id: uid});
        return user.save();
      })
  }
});
