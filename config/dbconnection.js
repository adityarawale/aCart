const moongose = require("mongoose");
const connectDB = async()=>{
  try {
    const connect = await moongose.connect("mongodb://localhost:27017/m-cart");
    console.log("Database connected: ",connect.connection.host,connect.connection.name)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports= connectDB;