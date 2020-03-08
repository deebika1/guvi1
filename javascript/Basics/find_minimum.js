const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
   var c=data.split(" ")
   var a=c.sort();
   console.log(a[0])
    });
