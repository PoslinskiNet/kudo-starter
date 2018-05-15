import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  idea: DS.belongsTo('idea'),
  amount: DS.attr('number')
});
