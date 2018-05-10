const express = require('express');
const app = express();

const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const routes = require("./server/routes");

app.set("models", require("./server/models/"));


app.use(express.static(__dirname + "/client"));

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

require("./server/config/passport-strat.js");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(routes);

app.use((error, req, res) => {
  console.log('ERROR: ', error );
})

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});