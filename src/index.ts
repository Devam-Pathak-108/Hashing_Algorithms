import express from "express";
import SHA256 from './SHA-256/Router'
const app = express()


app.use('/SHA256',SHA256)


app.listen(5000,()=>{
    console.log('This server is running on http://localhost:5000')
})