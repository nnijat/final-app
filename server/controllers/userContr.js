let User = require("../models/userModel")
var bcrypt = require("bcrpytjs");

exports.list = function(req, res) {
    User.find((err,u)=>{
        return res.json(u);
    });
}

exports.create = function(req, res){
    const{username, password} = req.body;
    if(!username || !password){
      return res.status(422).json({error: "You must provide a username and password"})
    }

    User.findOne({username:username}, (err, existingUser) =>{
      if(existingUser){
        res.send("User Already Exists");
      }
      else{
        var hash = bcrypt.hashSync(password, 8);
        req.body.password = hash;
        let user = new User(req.body)
        user.save(saveUser=>{
          console.log(savedUser)
          res.send("User Created")
        })
      }
    })

    // let user = new User({
    //     name: req.body.name,
    //     budget: 0,
    //     expenses:[],
    //     debits:[]
    // })
    // user.save().then(savedUser =>{
    //     console.log(savedUser)
    // })
}

exports.update = function(req,res){
    console.log("hello")
    User.findByIdAndUpdate(req.body._id, req.body, (err, user)=>{
        return res.json(user);
    })
}