var http = require('http')
  , bl   = require('bl');

var msgQueue = []
  , urls = process.argv.splice(2);

(function iterator(i){
  if(i >= urls.length){
    //console.log(msgQueue);
    for(var i in msgQueue){
      console.log(msgQueue[i]);
    }
    return;
  }

  var url = urls[i];
  http.get(url, function(res){
    res.pipe( bl(function(err, data){
      if(err){
        return console.error(err);
      }
      msgQueue[url] = data.toString();
      iterator(i+1);
    }) );
  });
})(0);

