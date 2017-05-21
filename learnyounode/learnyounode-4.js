var fs = require('fs');
var path = process.argv[2];
var myBuff = fs.readFile(path, 'utf-8', function (err, data) {
    var splitStr = data.split('\n');
    console.log(splitStr.length - 1);
});