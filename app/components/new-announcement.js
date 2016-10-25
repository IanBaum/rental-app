import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var args = {
        title: this.get('title'),
        message: this.get('message'),
        time: this.get('time'),
        img: this.get('img'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', args);
    }
  }

});
