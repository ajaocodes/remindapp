// Destructure Schema and model from our connection
const {Schema, model} = require("../config/database.js")


const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    reminder:[{type: Schema.Types.ObjectId, ref: "Reminder"}]
}, { timestamps: true });

/////////////////////////////////
// Define Our Model
/////////////////////////////////
const User = model("User", userSchema)


/////////////////////////////////
// Export Our Model
/////////////////////////////////
module.exports = User