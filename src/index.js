const express = require('express')

const app = express()

app.get('/', (req, res) => {
    //informaçoes da requisiçao
  //console.log(req)
  res.send('Páginal inicial')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})