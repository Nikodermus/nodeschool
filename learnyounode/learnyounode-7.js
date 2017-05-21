var http = require('http');
var path = process.argv[2];
var myHttp = http.get(path, function (response) {
    response.setEncoding('utf8')
    response.on("data", function (data) {
        console.log(data);
    });


});