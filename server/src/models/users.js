import mongoose from 'mongoose';

const {Schema} = mongoose


const  UsersSchema= new Schema({
 username:{type:String},
 password:{type:String},
 role:{type:String},
},{timestamps:true});

 export default mongoose.model("users", UsersSchema)