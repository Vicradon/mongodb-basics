const http = require('http');
console.log("Server is listen on port 2000", 'localhost:2000')

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Some text");
  res.end()
}).listen(2000);
