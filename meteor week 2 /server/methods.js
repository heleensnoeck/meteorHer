Meteor.methods({
    'sendForm':function(Name, Location, Skills, Author, createdAt) {
        Users.insert({
            'Name': Name,
            'Location': Location,
            'Skills': Skills,
            'Author': Meteor.userId(),
            'createdAt': new Date()
        }) 
    }
});