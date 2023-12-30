const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customerFullName:{
        type:String,
        required:true,
    },
    productName:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productQuantity:{
        type:Number,
        required:true,
    },
  },
  {timestamps:true}
);

const Order = mongoose.model("order",orderSchema);

module.exports = Order;