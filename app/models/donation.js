import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: true }),
  idea: DS.belongsTo('idea', { async: true }),
  amount: DS.attr('number')
});
