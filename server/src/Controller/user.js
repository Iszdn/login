import Users from "../models/users.js"
import {mongoose} from 'mongoose'


//register
export const createRegister=async (req,res)=>{
   let user=await Users.findOne({ username: req.body.username })
   if (user) {
    return res.status(400).send('User already exisits. Please sign in')
} else {
    try {
        
        const newUser = new Users({
            username: req.body.username,
            password: req.body.password,
            role:req.body.role
        })
        await newUser.save()
        return res.status(201).json(newUser)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}
}


//login
export const userLogin=async (req,res)=>{
  const {username}=req.body
  
}