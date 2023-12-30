const express = require("express");
const mongoose = require("mongoose");
const {handleCreateOrders,handleGetAllOrders,handleUpdateOrders,handleDeleteOrders} = require("./controllers/order");
const app = express();

const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/orderSystem").then((e)=>console.log("MongoDB Connected"));

app.use(express.json());

app.post("/api/postdata",handleCreateOrders);

app.get("/api/getdata",handleGetAllOrders);

app.patch("/api/patchdata/:id",handleUpdateOrders);

app.delete("/api/deletedata/:id",handleDeleteOrders);


app.listen(PORT,()=>console.log(`Server Started at PORT${PORT}`));