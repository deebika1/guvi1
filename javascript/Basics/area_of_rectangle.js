const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
  var a=data.split(" ")
  var b=0.5*(a[0]*a[1])
console.log(b)
});
