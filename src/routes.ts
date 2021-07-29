import { createUserHandler } from "./Controllers/UserController";
import { Express, Request, Response, NextFunction } from "express";
import validateRequest from './Middleware/validateRequest'
import {createUserSchema} from './Schema/UserSchema'

export default function(app: Express){
    
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    app.post('/api/users', validateRequest(createUserSchema), createUserHandler)
}