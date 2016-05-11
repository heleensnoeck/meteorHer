Meteor.subscribe('messages');

  //Bron: https://vimeo.com/40300075
	// Returns an keyboard events for attaching "ok/cancel" events to
	// a text input (given by selector (id's))
	
  var okcancel_events = function (selector) {
    return 'keyup '+selector+', keydown '+selector+', focusout '+selector;
  };

  // Creates an event handler for interpreting "escape", "return", and "blur"
  // on a text field and calling "ok" or "cancel" callbacks.
  var make_okcancel_handler = function (options) {
    var ok = options.ok || function () {};
    var cancel = options.cancel || function () {};
  	
    return function (evt) {
      if (evt.type === "keydown" && evt.which === 27) { // 27 = escape
        // escape = cancel
        cancel.call(this, evt);
      } else if (evt.type === "keyup" && evt.which === 13) { // 13 is enters
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };
  };


Template.entry.events = {};

// als je op enter druk gaat dit event lopen
Template.entry.events[okcancel_events('#messageBox')] = make_okcancel_handler({
	ok: function (text, event){
	  var nameEntry = document.getElementById('name');
	  if(nameEntry.value != "") { // als er een naam is ingevoerd voer dan het volgende uit
		  var ts = Date.now() / 1000; // dit is een date stamp?
		  Messages.insert({name: nameEntry.value, message: text, time: ts});
		  event.target.value = "";
	  }	  
	}
});

Template.messages.messages = function () {
	return Messages.find({}); // logt alle berichten 
};

Template.chatBox.events({
  'click .arrow-left': function(event){
    Router.go('/chat');
  }
});

Template.chatBox.events({
  'click .img_logout': function(event){
    Router.go('/');
  }
});