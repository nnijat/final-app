let User = require("../models/userModel")
const jwt = require("jwt-simple")


function authentication(req, res, next){
  if(request.path.split("/")[1] !== "api")
  {
    return next();
  }

  const tokenStr = req.header("authorization");
  if (!tokenStr) {
    return res.send("Invalid credentials");
  }

  const tokenObject = jwt.decode(tokenString, process.env.SECRET);

  User.findById(tokenObj.userId, function(err, user){
    if(err){return res.send("Error")}
    if(user){
      req.user = user;
      return next();
    }
    return res.send("invalid credentials")
  })
}

exports.authentication = authentication;