var fs = require('fs');
var path1 = process.argv[2];
var myExt = '.' + process.argv[3]
var myBuff = fs.readdir(path1, myExt, function (err, list) {
    for (i = 0; i < list.lenght; i++) {
        if (list[i].extname() === myExt) {
            console.log(list[i])
        }
    }
});