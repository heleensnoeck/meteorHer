// welke data is er beschikbaar aan de users
Meteor.publish('user', function(){ // naam van mongocollection
	var currentUserId = this.userId;  
	return Users.find({}); // naam van schema
});


Meteor.publish('messages', function(){ // naam van mongocollection
	var currentUserId = this.userId; 
	return Messages.find({}); // naam van schema
});

