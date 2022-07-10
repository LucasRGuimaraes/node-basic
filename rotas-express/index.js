var express = require('express')
var app = express()
var bodyParse = require('body-parse')

app.use(bodyParse.urlencoded())

app.get("/", (req,res)=>{
     res.send('Hello World!')
})

app.get("/alunos", (req, res) =>{

     let alunos = [{id: 0, nome: "Jose"},
                         {id: 1, nome: "Maria"},
                         {id: 2, nome: "Joao"},
                         {id: 3, nome: "Marcos"}]

     res.json(JSON.stringify(alunos))
})


app.listen(3000, () => console.log('Server rodando...'))