const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please add username "]
  },
  password:{
    type:String,
    required:[true,"Please add password "]
  },
  phoneNumber:{
    type:Number,
    required:[true,"Please add username "]
  },
  email:{
    type:String,
    required:[true,"Please add email "]
  }
  
},{
  timestamp:true,
});

module.exports = Mongoose.model("users",userSchema);