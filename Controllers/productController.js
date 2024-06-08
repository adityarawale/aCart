const User = require("../Models/userModel")
const asyncHandller = require("express-async-handler")
const tablets = require("../Models/ProductModel")
const bcrypt = require("bcrypt")


const postProduct= asyncHandller(async(req,res)=>{
  const {productId,productName,productCode,category,description,price,rating,manufacturer,osType} = req.body;

  // if (condition) {
    
  // }
  const addTablet = await tablets.create({
    productId,
    productName,
    productCode,
    category,
    description,
    price,
    rating,
    manufacturer,
    osType,
    // user_id:req.user.id,
  })
  res.status(202).json(addTablet)
})

// =======================getting the tablets=================

const getTablets= asyncHandller(async(req,res)=>{
  const tablet= await tablets.find({category:"Tablet"});
  res.status(200).json(tablet);
})

// =======================getting the Mobiles=================

const getMobiles= asyncHandller(async(req,res)=>{
  const tablet= await tablets.find({category:"Mobile"});
  res.status(200).json(tablet);
})

const updateProduct = asyncHandller(async (req,res)=>{
  const tablet = await tablets.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.status(203).json(tablet)
})

const deleteProduct = asyncHandller(async (req,res)=>{
  const tablet = await tablets.deleteMany(
  );
  res.status(203).json(tablet)
})

module.exports = {postProduct,getTablets,getMobiles,updateProduct,deleteProduct}