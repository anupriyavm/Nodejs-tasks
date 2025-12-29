const express = require("express");
const { open } = require("node:fs/promises");

const app = express();

app.get("/", async (req, res) => {
  const file = await open("sample.txt");

  const result = [];

  for await (const line of file.readLines()) {
    result.push(line.toUpperCase());
  }

  res.json({
    data: result,
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
