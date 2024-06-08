const User = require("../Models/userModel")
const asyncHandller = require("express-async-handler")
const tablets = require("../Models/ProductModel")
const bcrypt = require("bcrypt")

// =================register for new user======================
const registerUser = asyncHandller( async (req,res)=>{
  
    const {username,password,phoneNumber,email} = req.body;
    if (!username || !password || !phoneNumber || !email) {
      throw new Error("All feilds are mandatory!!!")
    };
    const userAvailable = await User.findOne({email})
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }

    // Hash password

    const hashPassword = await bcrypt.hash(password,10);
    console.log(hashPassword)
    const user = await User.create({
      username,
      password:hashPassword,
      phoneNumber,
      email,
    })
    res.status(201).json({_id: user.id,email: user.email})
})

// ====================log in for user====================
const userLogin = asyncHandller(async(req,res) =>{
  const{username,password}= req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory")
  }
  
  const checkit = await User.findOne({username})
  if (checkit && (await bcrypt.compare(password,checkit.password))) {
    res.status(203).json(checkit)
  } else {
    throw new Error(false)
  }
  
})


module.exports = {userLogin,registerUser};