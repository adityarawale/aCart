const express = require("express");

const { userLogin, registerUser,} = require("../Controllers/userController");
const { postProduct, getTablets, getMobiles, updateProduct, deleteProduct } = require("../Controllers/productController");

const router = express.Router();

router.post("/login",userLogin)
router.post("/signup",registerUser)
router.post("/products",postProduct)
router.get("/tablets",getTablets)
router.get("/mobiles",getMobiles)
router.put("/products",updateProduct)
router.delete("/products",deleteProduct)
// router.post("/tablets",postTablet)

// router.put("/tablets/:id",updatetab)
router.get("/carts")
router.get("/carts/:username")
router.post("/carts")
router.put("/carts/:username")
router.post("/orders/:username")
router.get("/products/:product")

module.exports = router;