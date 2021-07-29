import {createUser} from '../Services/UserService'
import { Express, Request, Response} from "express";
import { omit } from 'lodash';
import log from '../logger';

export async function createUserHandler(req: Request, res: Response)
{
    try{

        const user = await createUser(req.body)

        return res.json({user: omit(user.toJSON(), 'password')})
    }
    catch(e){

        log.error(e.message)
        
        return res.status(409).json({message: e.message})
    }
} 