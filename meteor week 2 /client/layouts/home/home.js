Template.home.events({ 
  'click .become': function () {
   Router.go('/register');
	}
});

Template.home.events({ 
  'click .already': function () {
   Router.go('/login');
	}
});


Template.login.events({ 
  'click .button': function () {
  	   Router.go('dashboard');
  	}
});