import { DocumentDefinition } from 'mongoose';
import User, {UserDocument} from '../Models/User'

export async function createUser(input: DocumentDefinition<UserDocument>)
{
    try{

        return await User.create(input)

    }catch(error){
        throw new Error(error)

    }
}

function findUser()
{
    
}