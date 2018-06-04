import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  value: 1,
  newValue: 1,

  tagName: 'button',

  classNames: ['btn button margin-s'],
  classNameBindings: ['isActive:active'],

  isActive: computed('value', function() {
    return this.get('value') >= this.get('newValue');
  }),

  click() {
    this.set('value', this.get('newValue'));
  }
});
