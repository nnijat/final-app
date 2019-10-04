const express = require('express')
const app = express()

let userRoute = require("./server/routes/userRoute")
const bodyParser = require("body-parser");
let mongoose = require("mongoose");
require("dotenv").config();
const authMiddleware = require("./server/services/authentication")
const sessionRoutes = require("./server/routes/sessionRoutes")

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(sessionRoutes)
app.use(authMiddleware)
app.use("/users", userRoute)

mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});


const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
