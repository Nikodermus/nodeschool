var myArgv = process.argv;
var sumArgv = 0;

function mySum(myArgv) {
    var lArgv = myArgv.length;

    for (i = 2; i < lArgv; i++) {
        sumArgv += Number(myArgv[i]);
    }

    return sumArgv;
}

console.log(mySum(myArgv));