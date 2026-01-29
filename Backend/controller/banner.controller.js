import Banner from "../models/banner.model.js"
import asyncHandler from "express-async-handler";

//CREATE BANNER
const createBanner=asyncHandler(async(req,res)=>{
    const newBanner= Banner(req.body)
    const savedBanner=await newBanner.save()

    if(!savedBanner){
        res.status(400)
        throw new Error("Invalid banner data")
    }else{
        res.status(201).json(savedBanner)
    }

})

//DELETE BANNER
const deleteBanner=asyncHandler(async(req,res)=>{
    const banner=await Banner.findByIdAndDelete(req.params.id)
    if(!banner){
        res.status(404)
        throw new Error("Banner not found")
    }else{
        res.status(200).json({message:"Banner deleted successfully"})
    }
})

//GET ALL BANNERS
const getAllBanners=asyncHandler(async(req,res)=>{
    const banners=await Banner.find()

    if(!banners){
        res.status(404)
        throw new Error("Banners not found")
    }else{
        res.status(200).json(banners)
    }
})

//GET RANDOM BANNER
const getRandomBanner=asyncHandler(async(req,res)=>{
    const banners=await Banner.find()

    const randomIndex=Math.floor(Math.random()*banners.length)
    const randomBanner=banners[randomIndex]

    if(!randomBanner){
        res.status(404)
        throw new Error("No banners available")
    }else{
        res.status(200).json(randomBanner)
    }

})

export {
    createBanner,
    deleteBanner,
    getAllBanners,
    getRandomBanner
}