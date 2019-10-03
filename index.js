const express = require('express')
const app = express()
app.use(express.static("public"));
let userRoute = require("./server/routes/userRoute")

const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
app.use("/users", userRoute)
let mongoose = require("mongoose");
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});


const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
