import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  // inventor: DS.belongsTo('inventor'),
  // assignee: DS.belongsTo('assignee'),
  // donations: DS.hasMany('donation')
});
