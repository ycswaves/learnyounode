var http = require('http')
  , url  = require('url')
  , args = process.argv.splice(2)
  , port = args[0];

var server = http.createServer(function (req, res) {
  if (req.method != 'GET'){
    return res.end('send me a GET\n');
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  parsedUrl = url.parse(req.url, true);
  if('/api/parsetime' == parsedUrl.pathname){
    var jsonRes = {}
      , date = new Date(parsedUrl.query.iso);
    jsonRes.hour = date.getHours();
    jsonRes.minute  = date.getMinutes();
    jsonRes.second  = date.getSeconds();
    res.write(JSON.stringify(jsonRes));
  }
  else if('/api/unixtime' == parsedUrl.pathname){
    var jsonRes = {};
    jsonRes.unixtime = new Date(parsedUrl.query.iso).getTime();
    res.write(JSON.stringify(jsonRes));
  }
  else{
    res.writeHead(404);
  }
  res.end();

})
server.listen(port);