const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema ({
    title: {type: String, required: true},
    note:  {type: String, required: true},
    url: {type: String},
    // date:{format:"date-time"},
    priority: Boolean
})

const userSchema = new Schema({
    username: String,
    password: String,
    reminder: [reminderSchema]
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);