const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    User: [
        {
            type: Schema.ObjectId,
            ref: 'User'
        }
    ]
});

const model = mongoose.model("Chat", mySchema);

module.exports = model;