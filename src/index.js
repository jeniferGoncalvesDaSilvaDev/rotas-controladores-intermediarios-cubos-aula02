const express = require('express')

const app = express()
const professores= [{
  id:1,
  nome:'Guido',
  stack:'back-end'
},
{
  id:2,
  nome:'Maria',
  stack:'front-end'
},
{
  id:3,
  nome:'Pedro',
  stack:'front-end'
},
{
  id:4,
  nome:'Ana',
  stack:'back-end'
}
]
app.get('/professores', function rota(req, res) {
  res.send(professores)
})

app.listen(3000, function mensagemNoTerminal () {
  console.log('Example app listening on port 3000!')
})