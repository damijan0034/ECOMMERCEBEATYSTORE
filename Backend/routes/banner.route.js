import express from 'express';
import {createBanner,  deleteBanner, getRandomBanner, getAllBanners} from '../controller/banner.controller.js';

const router=express.Router();

//CREATE Banner
router.post('/',createBanner)

//DELETE Banner
router.delete('/:id',deleteBanner)

//GET Random Banner
router.get('/random',getRandomBanner)

//GET ALL BannerS
router.get('/',getAllBanners)



export default router;