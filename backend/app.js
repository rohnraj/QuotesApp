const mongoose=require('mongoose')
const express=require('express')
const seedDB = require('./seed')
const app=express()
const Quotesrouter=require('./apis/quotesRoutes')
const cors=require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/quotesApp')
.then(() => console.log('Connected!'))
.catch((e)=> console.log(`database not connect ${e}`))

//json is use to convert any thing in json fomat here js object to json
//http method work with server(DB)
// app.get('/hello',(req,res)=>{
//     res.json({name:'rohan raj'});
// })

//insert dummy data once=>doit onces otherwise DB flood hojaega
// seedDB()


//middleware is use so that till run on every incoming request
app.use(cors()) //is used to share data cross port numbers **ye upper aayega**
app.use(Quotesrouter)

const PORT=8080
app.listen(PORT, ()=>{
    console.log(`erver connected to PORT ${PORT}`)
})