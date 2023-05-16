import db from "../models/db"
import dotenv from "dotenv"
dotenv.config()
import mysql from "mysql2/promise";
import { Response, Request, NextFunction } from "express";


function getFormRegister(req: Request, res:Response, next: NextFunction) {
    res.render('register')
}

export default {
    getFormRegister,
}