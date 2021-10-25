const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/routes')

const app = express()
app.use(cors({origin: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',router)

const PORT  = process.env.PORT || 5100

async function start(){
    try{
        await mongoose.connect('mongodb+srv://lisa15:lisa15@cluster0.qkjxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () => {console.log('server has been started')})
    }catch (err){
        console.log(err);
    }
}
start()
