//program to print world hello
const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
    c=data.split(' ');
    console.log(c[1],c[0])
    });
