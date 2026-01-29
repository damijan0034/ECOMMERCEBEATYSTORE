import express from 'express';
import {createOrder, updateOrder, deleteOrder, getUserOrders, getAllOrders} from '../controller/order.controller.js';
import  {protect}  from '../Middleware/auth.middleware.js';

const router=express.Router();

//CREATE Order
router.post('/',createOrder)

//UPDATE Order
router.put('/:id',protect,updateOrder)

//DELETE Order
router.delete('/:id',deleteOrder)

//GET Order
router.get('/find/:userId',getUserOrders)

//GET ALL OrderS
router.get('/',protect,getAllOrders)



export default router;