const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

function create(req, res){
  const{username, password} = req.body;
  User.findOne({username:username}, (err, user)=>{
    if(user && bcrypt.compareSync(password, user.password)){
      const timestamp = new Date().getTime();
      const userObj = {userId:user.id, iat: timestamp}
      var token = jwt.sign(userObj, "dsgsdfg")
      res.json({token: token})
    }
    else{
      res.send("Unauthorized")
    }
  })
}

module.exports = create