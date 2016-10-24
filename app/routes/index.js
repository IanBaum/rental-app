import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement')
    });
  },

  actions:{
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    saveAnnouncement3(args) {
      var newAnnouncement = this.store.createRecord('announcement', args);
      newAnnouncement.save();
      this.transitionTo('index');
    },

    destroyRental(rental){
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
