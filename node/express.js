const express = require('express')
const path = require('path')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  console.log(req.query)
  res.send('Hello World')
})

app.get('/about', (req, res) => {
    
  res.sendFile(path.join(__dirname, './index.html'));
//   res.send('about')
})

app.get('/contact', (req, res) => {
  res.send('contact')
})

app.get('/map', (req, res) => {
  res.send('map')
})

app.use(express.static('public')) // ⬅ move BELOW routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})




