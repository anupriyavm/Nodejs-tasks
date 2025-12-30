const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: String,
  datetime: Date,
  message: String,
});

module.exports = mongoose.model("Task", taskSchema);
