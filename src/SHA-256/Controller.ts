import { Request, Response } from "express";
import { GetHash } from "./Helper";
import { validationResult } from "express-validator";

export class SHA256Controller {
  static async GenerateHash(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({
          message: "bad request",
          errors: errors,
        });
      } else {
        const result = await GetHash(req.body.text);
        res.status(200).json({
          text: req.body.text,
          hash: result,
          message: "Hashing done SuccessFully",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
  static async CompareHash(req: Request, res: Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({
          message: "bad request",
          errors: errors,
        });
      } else {
        const result = await GetHash(req.body.text);
        if (result == req.body.hash) {
          res.status(200).json({
            is_same: true,
          });
        } else {
          res.status(200).json({
            is_same: false,
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
}
