const Order = require("../models/order");

async function handleCreateOrders(req,res){
    try {
        const orderData = req.body;
        const newOrder = await Order.create(orderData);
        res.status(201).json(orderData);
    } catch (error) {
        console.error("Error Creating Order:",error);
        res.status(500).json({error:"Internal Server Error"});        
    }
}

async function handleGetAllOrders(req,res){
    try {
        const allOrders = await Order.find({});
        res.status(200).json(allOrders);
    } catch (error) {
        console.error("Error getting all orders:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleUpdateOrders(req,res){
    try {
        const orderid = req.params.id;
        const updatedOrderData = req.body;
        const updateOrder = await Order.findByIdAndUpdate(
            {_id:orderid},
            updatedOrderData,
            {new:true},
            );
        res.status(200).json(updateOrder);
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(req.body);
}

async function handleDeleteOrders(req,res){
    try {
        const orderId = req.params.id;
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(204).send(); 
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    handleCreateOrders,
    handleGetAllOrders,
    handleUpdateOrders,
    handleDeleteOrders,
};