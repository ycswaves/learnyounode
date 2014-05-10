var myMod = require('./myMod.js')
  , dirPath = process.argv[2]
  , fileExt = process.argv[3];

myMod(dirPath, fileExt, function (err, content) {
  if (err)
    return err;

  content.forEach(function(element){
    console.log(element);
  })
})

