require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/openai/gpt", require("./routes"));

const server = app.listen(PORT, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server is working : PORT - ", port);
});
