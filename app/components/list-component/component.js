import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);

    const ideasData = this.get('store').findAll('idea');
    const ideas = ideasData.map(idea => {
      // console.log(
      //   idea.get('inventorId')
      //     ? this.get('store')
      //         .findRecord('user', idea.get('inventorId'))
      //         .get('avatarUrl')
      //     : undefined,
      // );

      return {
        id: idea.get('id'),
        title: idea.get('title'),
        description: idea.get('description'),
        shortDescription: idea.get('shortDescription'),
        image: idea.get('image'),
        target: idea.get('target'),
        avatarUrl: idea.get('inventorId')
          ? this.get('store')
              .find('user', idea.get('inventorId'))
              .get('avatarUrl')
          : undefined,
      };
    });

    this.set('ideas', ideas);
  }
});
