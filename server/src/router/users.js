import  express  from "express";
import { createRegister } from "../Controller/user.js";

const  router=express.Router()


router.post("/register",createRegister)

export default router;