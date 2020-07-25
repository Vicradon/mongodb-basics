const http = require('http');
const PORT = 2000
console.log(`Server is listen on port ${PORT}`, `http://localhost:${PORT}`)

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end("Hello World, Welcome to WeJapa Internships")
  }
  if (req.method === 'POST' && req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    req.on('data', chunk => {
      const body = chunk.toString();

      const { name } = JSON.parse(body)
      res.end(`Hello ${name}, Welcome to WeJapa Internships`)
    });
  }
}).listen(PORT);
