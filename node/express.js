// const http = require('http')

// // Use environment variable PORT if set, otherwise default to 3000
// const port = process.env.PORT || 5000; // changed 3000 to 5000

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
 

//   res.end('SERVER OK')
// })

// server.listen(port, () => {
//   console.log(`HTTP server running on http://localhost:${port}`)
// })

const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('about')
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



