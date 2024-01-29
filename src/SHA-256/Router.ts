import express, { Router } from 'express'
import bodyParser from 'body-parser'
import { SHA256Controller } from './Controller'
const router = Router()
router.use(express.json())
router.use(bodyParser.urlencoded({
    extended:false
}))
router.post('/hash',SHA256Controller.StoreHash)

export default router