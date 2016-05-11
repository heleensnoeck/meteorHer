Users = new Mongo.Collection('user');

Users.allow({
    insert: function(userId, doc) {
        return !!userId; // als je ingelogd ben dan mag je content toevoegen aan het schema
    }
});

Schemas = {};

Schemas.User = new SimpleSchema({
    Name: {
        type: String,
        label: "Name",
        max: 30
    },
    Location: {
        type: String,
        label: "Location"
    },
    Skills: { // met een array
        type: String,
        label: "Skills",
        min: 0
    },
    Author: {
        type: String,
        label: "author",
        optional: true,
        autoValue: function() {
             return this.userId;
         },
         autoform: { // zorgt er voor dat de gebruiker hem niet ziet
            type: "hidden"
         }
    },
    createdAt: {
        type: Date,
        label: "created at",
        optional: true,
        autoValue: function() {
             return new Date();
         },
         autoform: { // zorgt er voor dat de gebruiker hem niet ziet
            type: "hidden"
         }
    }
});

Users.attachSchema(Schemas.User);

