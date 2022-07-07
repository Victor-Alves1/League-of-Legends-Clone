const express = require("express")
const { json } = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()

const app = express()

app.use(json())
app.use(cors())
app.listen(3333)

app.get('/', async(req, res)=>{
    res.send("")
})

console.log(process.env)

