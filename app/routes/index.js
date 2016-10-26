import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement'),
      reviews: this.store.findAll('review')
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

    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    },
// we call a method on an object here (keys) and pass in that which you'd like to look through (params)
    // update(rental, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       rental.set(key,params[key]);
    //     }
    //   });
    //   rental.save();
    //   this.transitionTo('index');
    // },
    //
    // destroyRental(rental) {
    //   rental.destroyRecord();
    //   this.transitionTo('index');
    // },

    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');


    }
  }
});
