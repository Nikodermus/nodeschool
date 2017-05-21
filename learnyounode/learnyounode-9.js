var http = require('http');
var bl = require('bl');
var path1 = process.argv[2];
var path2 = process.argv[3];
var path3 = process.argv[4];

var calCount = 0;

var myHttp = http.get(path1, function (response) {
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {
        var str = data.toString()
        console.log(str.length)
        console.log(str)
    }))
});