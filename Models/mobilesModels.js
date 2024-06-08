const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  productId:{
    type:Number,
    require:[true,"Id of the product"]
  },
  productName:{
    type:String,
    require:[true,"Name of the product"]
  },
  productCode:{
    type:String,
    require:[true,"Code of the product"]
  },
  description:{
    type:String,
    require:[true,"Description of the product"]
  },
  price:{
    type:Number,
    require:[true,"Price of the product"]
  },
  rating:{
    type:Number,
    require:[true,"Rating of the product"]
  },
  manufacturer:{
    type:String,
    require:[true,"Manufacturer of the product"]
  },
  osType:{
    type:String,
    require:[true,"Type of OS of product"]
  },
},{
  timestamp:true
});
module.exports=mongoose.model("mobiles",userSchema);