const User = require("../models/userModel")
const tokenForUser = require("../services/token").tokenForUser;
const compare = require("../services/hash").compare;


function create(req, res){
  const{username, password} = req.body;

  User.findOne({ username }).exec()
    .then(user =>{
    if(!user){
      return res.send("no user found")
    }
    compare(password, user.password, (err, isMatch)=>{
      if(err){
        return res.send("Error")
      }
      if(!isMatch){
        return res.send("invalid password")
      }
      const token = tokenForUser(user);
      res.json({token});
    });
    // if(user && bcrypt.compareSync(password, user.password)){
    //   const timestamp = new Date().getTime();
    //   const userObj = {userId:user.id, iat: timestamp}
    //   var token = jwt.sign(userObj, "dsgsdfg")
    //   res.json({token: token})
    // }
    // else{
    //   res.send("Unauthorized")
    // }
  }).catch(() =>{
    return res.send("Error")
  })
}

exports.create = create