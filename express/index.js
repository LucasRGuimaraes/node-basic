const bodyParser = require('body-parser')
const express = require ('express')
const app = express()

const PORT = 3000

let alunos = [{id: 0, nome: "Jose"},
{id: 1, nome: "Maria"},
{id: 2, nome: "Joao"},
{id: 3, nome: "Marcos"}]

app.use(bodyParser.urlencoded())

app.get("/", (req, res)=>{
     res.send("Hello World!")
} )

app.get("/alunos", (req, res) =>{
     res.json(JSON.stringify(alunos))
})

app.get("/aluno", (req, res)=>{
     let aluno = alunos[req.body.id]
     res.json(aluno)
})

app.listen(PORT, ()=> {
     console.log(`Server Running on PORT: ${PORT} `)
})