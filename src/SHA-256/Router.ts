import express, { Router } from "express";
import bodyParser from "body-parser";
import { SHA256Controller } from "./Controller";
import { check } from "express-validator";
const router = Router();
router.use(express.json());
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
router.post(
  "/generate_hash",
  [
    check("text")
      .notEmpty()
      .withMessage("text is empty")
      .isString()
      .withMessage("text must be string")
      .isLength({ min: 1 })
      .withMessage("text can't be empty string"),
  ],
  SHA256Controller.GenerateHash
);
router.post("/compare",[
    check("text")
      .notEmpty()
      .withMessage("text is empty")
      .isString()
      .withMessage("text must be string")
      .isLength({ min: 1 })
      .withMessage("text can't be empty string"),
    check("hash")
      .notEmpty()
      .withMessage("hash is empty")
      .isString()
      .withMessage("hash must be string")
      .isLength({ min: 1 })
      .withMessage("hash can't be empty string"),
  ], SHA256Controller.CompareHash);
export default router;
