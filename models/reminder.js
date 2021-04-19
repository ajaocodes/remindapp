// Destructure Schema and model from our connection
const {Schema, model} = require("../config/database.js")

const reminderSchema = new Schema ({
    title: {type: String, required: true},
    note:  {type: String, required: true},
    url: {type: String},
    // date:{format:"date-time"},
    priority: Boolean,
    user:[{type: Schema.Types.ObjectId, ref: "User"}]
})

/////////////////////////////////
// Define Our Model
/////////////////////////////////
const Reminder = model("Reminder", reminderSchema)
/////////////////////////////////
// Export Our Model
/////////////////////////////////
module.exports = Reminder