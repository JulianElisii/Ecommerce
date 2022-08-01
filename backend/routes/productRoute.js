const express = require("express");
const router = express.Router();
const {PostProducts, getProducts} = require("../controllers/productController")

router.post("/", PostProducts);

router.get("/", getProducts)


module.exports = router