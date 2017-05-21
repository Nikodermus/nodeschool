var http = require('http');
var path = process.argv[2];
var bl = require('bl');
var countData = 0;
var allData = '';
var myBuff = '';
var myHttp = http.get(path, function (response) {
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {
        var str = data.toString()
        console.log(str.length)
        console.log(str)
    }))
});