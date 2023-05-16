import db from "../models/db"
import dotenv from "dotenv"
dotenv.config()
import mysql from "mysql2/promise";
import { Response, Request, NextFunction } from "express";


function getFormSignIn(req: Request, res:Response, next: NextFunction) {
    res.render('login')
}

export default {
    getFormSignIn,
}