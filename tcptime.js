var net = require('net')
  , args = process.argv.splice(2)
  , port = args[0];

var server = net.createServer(function (socket) {
  var date = new Date()
    , YYYY = fillZero(date.getFullYear())
    ,  MM  = fillZero(date.getMonth()+1)
    ,  DD  = fillZero(date.getDate())
    ,  hh  = fillZero(date.getHours())
    ,  mm  = fillZero(date.getMinutes());

  socket.end(YYYY+'-'+MM+'-'+DD+' '+hh+':'+mm+'\n');
});
server.listen(port);

function fillZero(i){
  return (i < 10)? '0'+i : i;
}