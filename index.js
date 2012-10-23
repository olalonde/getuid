var exec = require('child_process').exec;
// @todo: sync version
module.exports = function(username, cb) {
  exec('id -u ' + username, function(err, stdout, stderr) {
    cb(err, stdout);
  });
}
