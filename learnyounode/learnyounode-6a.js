var path1 = process.argv[2];
var myExt = process.argv[3]
var myModule = require('./learnyounode-6b')
myModule(path1, myExt, (err, list) => {
    list.forEach(function (element) {
        console.log(element);
    });
});