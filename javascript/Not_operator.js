const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
    var c=~data;
    console.log(c)
    });
