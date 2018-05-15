import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  shortDescription: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  target: DS.attr('number'),
  inventor: DS.belongsTo('inventor'),
  assignee: DS.belongsTo('assignee'),
  donations: DS.hasMany('donation')
});
