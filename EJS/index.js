const PORT = 3000

const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

let users = [
     {
          id: 0,
          name: "Lucas Guimarães",
          phone: "(24) 98828-9574"
     },
     {
          id: 1,
          name: "Liviane Gregorius",
          phone: "(21) 98828-9574"
     },
     {
          id: 2,
          name: "Joao Perez",
          phone: "(48) 98828-9574"
     },
]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
     res.render('user', {users})
})

app.get("/about", (req, res)=>{
     res.render('about')
})

app.listen(PORT, ()=>{
     console.log(`Server running on ${PORT}`)
})