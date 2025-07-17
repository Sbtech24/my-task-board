const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const ConnectDb = require("./config/db")
//Load env 
dotenv.config({path:"./config/config.env"})

const tasks = require("./routes/tasks")





const app = express()
const PORT = 5000

// Load db 
ConnectDb()

app.use(express.json())

if(process.env.NODE_ENV ==="development"){
app.use(morgan("dev"))
} 

app.use("/api/v1/task",tasks)

const server = app.listen(PORT,console.log(`Server running in  ${process.env.NODE_ENV} node on  ${PORT}`))

//Handle unhandled promise rejection 
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error : ${err.message}`)
    server.close(()=>process.exit(1))
})