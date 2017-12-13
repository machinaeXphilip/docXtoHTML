const testFolder = '.';

const fs = require('fs');

const exec = require('child_process').execSync;


var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};


let listoffiles;

walk(testFolder, function(err, results) {
  if (err) throw err;
  console.log(results);
  listoffiles = results;

  listoffiles.forEach(file => {
    //console.log(file);

    if (file.endsWith(".docx")){
        exec("mammoth "+file+" "+file);
        console.log("changed "+ file);
    }
    //console.log(file);


  })


});




execute = function(command, callback){
  exec(command, function(error, stdout, stderr){
    callback('stdout: '+stdout + 'stderr: '+stderr);
  });
}
