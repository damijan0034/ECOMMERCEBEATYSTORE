import Order from "../models/order.model.js"
import asyncHandler from "express-async-handler";

//CREATE ORDER
const createOrder=asyncHandler(async(req,res)=>{
    const newOrder=new Order(req.body)
    const savedOrder=await newOrder.save()

    if(!savedOrder){
        res.status(400)
        throw new Error("Invalid order data")
    }else{
        res.status(201).json(savedOrder)
    }
})

//UPDATE ORDER
const updateOrder=asyncHandler(async(req,res)=>{
    const updatedOrder=await Order.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        {new:true}
    )
    if(!updatedOrder){
        res.status(404)
        throw new Error("Order not found")
    }else{
        res.status(200).json(updatedOrder)
    }
})

//DELETE ORDER
const deleteOrder=asyncHandler(async(req,res)=>{
    const deletedOrder=await Order.findByIdAndDelete(req.params.id)
    if(!deletedOrder){
        res.status(404)
        throw new Error("Order not found")
    }else{
        res.status(200).json({message:"Order deleted successfully"})
    }
})

//GET USER ORDERS
const getUserOrders=asyncHandler(async(req,res)=>{
    const orders=await Order.find({userId:req.params.id}).reverse()

    if(!orders){
        res.status(404)
        throw new Error("Orders not found")
    }else{
        res.status(200).json(orders)
    }
})

//GET ALL ORDERS
const getAllOrders=asyncHandler(async(req,res)=>{
    const orders=await Order.find().sort({createdAt:-1})

    if(!orders){
        res.status(404)
        throw new Error("Orders not found")
    }else{
        res.status(200).json(orders)
    }
})

export {
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders,
    getAllOrders
}