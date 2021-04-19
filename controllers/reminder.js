//Import the model
const Reminder = require("../models/reminder");
const User = require("../models/user");

//index/reminder
const index = (req, res) => {
    Reminder.find ({}, (err, reminder) => {
        console.log(reminder)
        
        res.render ("reminder/index", {reminder: reminder}); 
    });
}

//New reminder
const newReminder = (req, res) => {
    res.render("reminder/new")
}

//Delete Reminder 
const deleteReminder = (req, res) => {
    Reminder.findByIdAndDelete(req.params.id, (error, data) => {
      res.redirect("/reminder");
    });
  };

//   //Update Reminder 
//   const update = (req,res) => {

//   }

  //create reminder
const create = (req,res) => {
    Reminder.create(req.body, (err, reminder) => {
        console.log(reminder);
        res.redirect("/reminder");
    }); 
}
//Edit Reminder
const edit = (req, res) => {
    Reminder.findById(req.params.id, (err, foundReminder)=> { 
        res.render('edit.ejs', {reminder: foundReminder}); 
    });
  };



module.exports ={
    index: index,
    new: newReminder,
    create,
    delete: deleteReminder,
    edit,

};
