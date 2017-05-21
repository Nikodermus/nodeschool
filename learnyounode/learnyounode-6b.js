module.exports = function (path, ext, callback) {
    var fs = require('fs');
    var myBuff = fs.readdir(path, ext, function (err, list) {
        if (err) {
            return callback(err);
        }

        var list2 = list.filter(file => {
            return file.includes('.' + ext);
        });

        callback(null, list2);
    });
}