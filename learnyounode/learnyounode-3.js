var fs = require('fs');

var myBuff = fs.readFileSync(process.argv[2]);
var myStr = myBuff.toString();
var splitStr = myStr.split('\n');
console.log(splitStr.length - 1);