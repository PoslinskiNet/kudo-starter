import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  value: 1,
  newValue: 1,

  tagName: 'button',

  classNames: ['button button--muted'],
  classNameBindings: ['isActive:selected'],

  isActive: computed('value', function() {
    return this.get('value') >= this.get('newValue');
  }),

  click() {
    this.set('value', this.get('newValue'));
  }
});
