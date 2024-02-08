import { Request, Response } from "express";
import { GetHash } from "./Helper";

export class SHA256Controller{
    static async StoreHash(req:Request, res:Response){
        const result = await GetHash(req.body.text)
        res.status(200).json({
            text:req.body.text,
            hash:result
        })
    }
}