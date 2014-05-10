var http = require('http')
  , map  = require('through2-map')
  , args = process.argv.splice(2)
  , port = args[0];

var server = http.createServer(function (req, res) {
  if (req.method != 'POST'){
    return res.end('send me a POST\n');
  }
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
})
server.listen(port);