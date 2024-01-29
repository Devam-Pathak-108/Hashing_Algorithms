import { Request, Response } from "express";

export class SHA256Controller{
    static async StoreHash(req:Request, res:Response){
        res.send(req.body)
    }
}