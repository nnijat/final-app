const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    username:{
      type: String,
      unique: true,
      lowercase: true,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    budget: Number,
    expenses: [],
    debits: []
})

let User = mongoose.model('User', userSchema);

module.exports = User;