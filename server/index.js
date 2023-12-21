import express, { json } from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import userRouter from './src/router/users.js'


const app = express()
app.use(json())
config()

app.use("/users",userRouter)
const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)

connect(url).then(()=>console.log("connected")).catch(err=>console.log("not connected" + err))


app.listen(PORT, () => {
  console.log(`Example app listening on port `)
})