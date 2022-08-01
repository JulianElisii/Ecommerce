const Product = require ("../models/product")

const PostProducts = async (req, res) => {
const {name,price, rating,image,description} = req.body 
  const newProduct  = await new Product ({name,price, rating,image,description})
   const Productnew = await newProduct.save()
   res.send(Productnew);
}

const getProducts = async (req,res) => {
  const product  = await Product.find({})
  res.send(product)
}


module.exports = {
    PostProducts, getProducts
}