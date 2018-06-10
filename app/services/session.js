import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object";

export default Service.extend({
  store: service(),

  currentUser: computed(function() {
    return this.get('store').findRecord('user', 'L4rZFdUfAnO9y96feaJ5aOJg98L2');
  }),
});
