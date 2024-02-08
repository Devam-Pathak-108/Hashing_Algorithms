import express from "express";
import SHA256 from './SHA-256/Router'
import morgan from 'morgan'
const app = express()

app.use(morgan('tiny'));

app.use('/SHA256',SHA256)


app.listen(5000,()=>{
    console.log('This server is running on http://localhost:5000')
})