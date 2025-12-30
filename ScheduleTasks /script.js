const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Task = require("./model");
const dotenv = require("dotenv");

app.use(express.json());
dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected successfully"));

app.post("/schedule", async (req, res) => {
  const { task, message, datetime } = req.body;
  try {
    const newTask = await Task.create({
      task,
      datetime,
      message,
    });

    setTimeout(() => {
      console.log("Task:", task);
      console.log("Message:", message);
    }, new Date(datetime.toString()) - new Date());

    res.json({
      status: "success",
      data: newTask,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
