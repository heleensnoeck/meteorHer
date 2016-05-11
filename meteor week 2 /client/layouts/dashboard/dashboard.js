// Users = new Mongo.Collection('user');

Meteor.subscribe('user'); // naam collection -> voegt gebruikers (skills, locatie enz.) toe aan de mongodb database

Template.dashboard.helpers({
	user: ()=> {			// of addUser
		return Users.find({});
	}
});




// poging 2
 // Template.dashboard.helpers  ({ 
 //     //NOTE : 'event' is the name of variable from html template
 //     'user' : function () {
 //          //returns list of Objects for all Events
 //          return Users.find({});
 //      }
 // });


