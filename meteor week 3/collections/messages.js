Messages = new Mongo.Collection('messages');

Messages.allow({
    insert: function(userId, doc) {
        return !!userId; // als je ingelogd ben dan mag je content toevoegen aan het schema
    }
});



// Schemas = {};

// Schemas.Messages = new SimpleSchema({
//     name: {
//         type: String,
//         label: "Name",
//         max: 30
//     },
//     message: {
//         type: String,
//         label: "Name",
//         max: 30
//     }
// });

// Messages.attachSchema(Schemas.Messages);

