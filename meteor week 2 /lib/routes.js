
// Template.login.events({
//     'submit form': function(event){
//         event.preventDefault();
//         var email = document.getElementById("login-email").value;
//         var password = document.getElementById("login-password").value;
//         console.log(email)
//         Meteor.loginWithPassword(email, password, function(error){
//             if(error){
//                 console.log(error.reason);
//             } else {
//                 Router.go("/dashboard");
//             }
//         });
//     }
// });


Router.route('/', function () {
  this.render('home');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});


// Accounts.onLogin(function(){
//  if  ('click .button'){
//  Router.go('/dashboard');
//  }
// });

// Template.login.events({ 
//   'click .button': function () {
//    Router.go('/dashboard');
//  }
// });

// Router.route('dashboard', {
//   path: '/dashboard',
//   onBeforeAction: function () {
//     if (! Meteor.user()) {
//        Router.go('dashboard') 
//      } else {
//         Router.go('register')
//       }
//     }
// });


 //  onBeforeAction: function () {
 //    if ( Meteor.user()) {
 //     Router.go('dashboard');
 //    } else {
 //     Router.go('register');
 //  }
 // }

