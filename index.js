require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res)=>{
    res.send('amanjaiswalcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>login details</h1>')
})
/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })*/

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${port}`) /* this is not work due to .env file 
  type localhost:5000 in chrome search*/
})