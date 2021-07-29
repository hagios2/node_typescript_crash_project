import {AnySchema} from 'yup'
import { Express, Request, Response, NextFunction } from "express";
import log from '../logger';

const validate = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => 
{
    try{

        await schema.validate({body: req.body, query: req.query, params: req.params})

        next()
   
    }catch(e){

        log.error(e)

        return res.status(400).send({message: e.errors})
    }
}

export default validate