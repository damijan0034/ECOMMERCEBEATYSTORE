import express from 'express';
import {updateUser,  deleteUser, getUser, getAllUsers} from '../controller/user.controller.js';

const router=express.Router();

//update User
router.put('/:id',updateUser)

//DELETE User
router.delete('/:id',deleteUser)

//GET  User
router.get('/find/:userId',getUser)

//GET ALL UserS
router.get('/',getAllUsers)



export default router;