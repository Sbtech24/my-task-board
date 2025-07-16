const express = require("express")

const PORT = 5000
const app = express()

app.listen(()=>{
    console.log(`Server is running on port ${PORT || 5000}`)
})