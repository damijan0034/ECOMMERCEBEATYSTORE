import express from 'express';
import {createProduct, updateProduct, deleteProduct, getProduct, getAllProducts, rateProduct} from '../controller/productController.js';

const router=express.Router();

//CREATE PRODUCT
router.post('/',createProduct)

//UPDATE PRODUCT
router.put('/:id',updateProduct)

//DELETE PRODUCT
router.delete('/:id',deleteProduct)

//GET PRODUCT
router.get('/find/:id',getProduct)

//GET ALL PRODUCTS
router.get('/',getAllProducts)

//RATE PRODUCT
router.post('/rate/:productId',rateProduct)

export default router;