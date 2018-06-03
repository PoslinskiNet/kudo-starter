import Component from '@ember/component';

export default Component.extend({
  filterValue: '',

  actions: {
    changeFilter(newFilterValue) {
      this.set('filterValue', newFilterValue);
    }
  }
});
