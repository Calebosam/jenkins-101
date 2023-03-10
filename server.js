const express = require("express")

const app = express

const PORT = process.env.PORTm || 4000

app.get("/",(req, res, next)=>{
    res.send(`<h1>Hello World from J E N K I N S</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
})