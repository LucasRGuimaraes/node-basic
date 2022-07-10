let fs = require('fs')

let args = process.argv.slice(2)

let fileName = args[0]

fs.readFile(fileName, 'UTF8', (error, data) => {
  if (error) throw error

  fs.writeFile(fileName + '_Uppercase', data.toUpperCase(), error => {
    if (error) throw error

    console.log('Arquivo gerado com sucesso!')
  })
})

// SOBREESCREVENDO ARQUIVO
// fs.writeFile('teste.txt', 'Ola mundo!', function (error) {
//   if (error) {
//     throw error
//   }

//   console.log('Arquivo criado com sucesso!')
// })

// CONCATENANDO ARQUIVO
// fs.appendFile('teste.txt', ' - Hello World!', function (error) {
//   if (error) {
//     throw error
//   }

//   console.log('Arquivo criado com sucesso!')
// })

// EXCLUINDO ARQUIVO
// fs.unlink('teste.txt', function (error) {
//   if (error) {
//     throw error
//   }

//   console.log('Arquivo removido com sucesso!')
// })

// RENOMEANDO ARQUIVO
// fs.rename('teste.txt', 'NovoNome.txt', function (error) {
//   if (error) {
//     throw error
//   }

//   console.log('Arquivo renomeado com sucesso!')
// })

// LENDO ARQUIVO
// fs.readFile('teste.txt', 'UTF-8', function (error, data) {
//   if (error) {
//     throw error
//   }

//   console.log(data)
// })
