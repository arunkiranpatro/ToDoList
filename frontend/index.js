const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = process.env.port || 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.status(404);
  res.render("E404");
});

app.use((err, req, res, next) => {
  res.status(500);
  res.render("E500");
});

app.listen(port, () => {
  console.log("server listening at " + port);
});
