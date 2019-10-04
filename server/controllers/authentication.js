let User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const jwt = require("jwt-simple")


function authentication(req, res, next){
  const token = req.header("token");
  try{
    var tokenObj = jwt.verify(token, "dsgsdfg");
    next();
  }
  catch{
    res.send("unauthorized");
  }
  return;
  // User.findOne({username:username}, (err, user)=>{
  //   if(user && bcrypt.compareSync(password, user.password)){
  //     next();
  //   }
  //   else{
  //     res.send("unauthorized")
  //   }
  // })
}

exports.authentication = authentication;