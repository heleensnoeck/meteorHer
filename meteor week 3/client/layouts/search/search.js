
// On Client
// koppel easyseach
Template.search.helpers({
  usersIndex: () => UsersIndex
});


Template.chat.events({
	'click .search_chats': function(event){
		Router.go('/chatBox');
	}
});

Template.search.events({
	'click .img_logout': function(event){
		Router.go('/');
	}
});




