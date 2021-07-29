import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import config from "config";
import dotenv from "dotenv";
dotenv.config({path: './config/.env'});
const { Schema } = mongoose

export interface UserDocument extends mongoose.Document{

    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updateAt: Date,
    comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, unique: true, required: true},
        password: {type: String, required: true}
    },
    {timestamps: true}
)

UserSchema.pre('save', async function (next: mongoose.HookNextFunction){
    
    let user = this as UserDocument

    let saltWorkFactor = Number(process.env.saltWorkFactor) || 10

    const salt = await bcrypt.genSalt(saltWorkFactor) 

    const hash = await bcrypt.hashSync(user.password, salt)

    user.password = hash

    return next()
})


UserSchema.methods.comparePassword = async function(candidatePassword: string)
{
    const user = this as UserDocument
    
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
}

const User = mongoose.model<UserDocument>('User', UserSchema)

export default User