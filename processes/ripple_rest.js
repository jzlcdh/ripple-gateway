
var exec = require("child_process").exec;
var spawn = require("child_process").spawn;

var databaseUrl = process.env.DATABASE_URL;

process.env.DATABASE_URL = null;

exec('cd ./node_modules/ripple-rest/ && node server.js', function(err, stdout, stderr) {
  if (err) {
    console.log(err);
  } else {
    console.log(stdout);
  }
});

console.log('Running Ripple REST on http://localhost:5990');
