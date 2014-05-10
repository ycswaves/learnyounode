var http = require('http')
  , fs   = require('fs')
  , args = process.argv.splice(2)
  , port = args[0]
  , file = args[1];


var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(file).pipe(res);
})
server.listen(port);