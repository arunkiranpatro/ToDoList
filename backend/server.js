const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const tasks = require("./routes/api/tasks");
const app = express();
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

// parse application/json
app.use(bodyParser.json());
app.use("/api/tasks", tasks);


const db = require("./config/keys").mongoURI;
mongoose
    .connect(db)
    .then(() => console.log("db connected"))
    .catch(err => console.log(err));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));