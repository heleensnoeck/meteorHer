//Bron https://www.youtube.com/watch?v=sdJDzfHvHPI
if(Meteor.isClient){
	Template.register.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#register-email').value;
			var passwordVar = template.find('#register-password').value;
			Accounts.createUser({
				email: emailVar,
				password: passwordVar // enqrips password ivm geinstalleerde packets zie documentatie
			});
			// if (!Meteor.loggingIn()) Router.go('/login');
		}
	});
	Template.login.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#login-email').value;
			var passwordVar = template.find('#login-password').value;
			console.log(" email: " + emailVar);
			Meteor.loginWithPassword(emailVar, passwordVar, function(error){
			if(error){
			    console.log(error.reason);
			} else {
			    console.log('ik ben hier');
			    Router.go('/dashboard');
			}
		}); // zonder deze twee velden kan je niet inloggen
      } 
	});

	Template.dashboard.events({
		'click .logout': function(event){
			event.preventDefault();
			Router.go('/register');
			Meteor.logout();
		}
	});
}


