Meteor.publish('user', function(){ // naam van mongocollection
	return Users.find({Author: this.userId}); // naam van schema
});


