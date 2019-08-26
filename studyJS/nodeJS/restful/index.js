const express = require("express"),
  consign = require("consign"),
  bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign()
  .include("routes")
  .include("utils")
  .into(app);

app.listen(3000, () => {
  console.log("servidor rodando!");
});
