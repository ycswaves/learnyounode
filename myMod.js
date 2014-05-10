var fs = require('fs')
  , path = require('path');


module.exports = function(dirPath, extName, callback){
  var dir = fs.readdir(dirPath, function(err, data){
    var res = [];
    if(err)
      return callback(err);

    for (var i = 0; i < data.length; i++) {
      if(path.extname(data[i]) == '.'+extName){
        res.push(data[i]);
      }
    };
    callback(null, res);

  });
}