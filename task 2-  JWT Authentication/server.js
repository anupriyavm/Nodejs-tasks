const express = require("express");
const dotenv = require("dotenv");
const app = express();
const router = require("./router");
dotenv.config({ path: "./conf.env" });
const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected successfully"));

app.use(express.json());
app.use("/users", router);
app.listen(8000);
app.get("/", (req, res) => {
  res.end("server start");
});
