const express=require('express')
const router=express.Router()
const Quotes=require('../models/Quote')

//data lana hai from DB to show on frontend later
router.get('/allQuotes', async (req,res)=>{
    try{
        let QuotesData=await Quotes.find({})
        res.status(200).json(QuotesData)
    }
    catch(e){
        res.status(400).json({message:'something went wrong'})
    }
})

//API to app new data to the DB
router.post('/newQuotes', async (req,res)=>{
    try{
        //form ka data body mai milta hai
        const {author, books, disc}=req.body
        await Quotes.create({author, books, disc})
        res.status(200).json({message:'new data added successfully'})
    }
    catch(e){
        res.status(400).json({message:'something went wrong'})
    }
})

module.exports=router