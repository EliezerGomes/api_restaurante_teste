import { Request, Response, NextFunction } from "express";
const cors = require("cors")

export function AccesApi(req: Request, res: Response, next:NextFunction){
    res.header("Access-Control-Alow-Origin", "*")
    cors()
    return next()
}