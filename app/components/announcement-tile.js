import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    deleteAnnouncement(announcement) {
      if(confirm('Are you sure you want to delete this announcement? Like, look at that cat?!')){
        this.sendAction('destroyAnnouncement', announcement);
    }
  }
}
});
