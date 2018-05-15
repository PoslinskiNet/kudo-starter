import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  shortDescription: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  target: DS.attr('number'),
  inventor: DS.belongsTo('user'),
  assignee: DS.belongsTo('user'),
  donations: DS.hasMany('donation')
});
