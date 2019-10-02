const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({
  path: ".env"
});

const routes = require("./routes");

const app = express();

const { MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
