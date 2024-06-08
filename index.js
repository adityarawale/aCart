const express = require("express");
const connectDB= require("./config/dbconnection")
const app = express();
connectDB();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/",require("./Routes/routing"))

app.listen(port,() =>{
  console.log(`Server is running on port ${port}`)
});