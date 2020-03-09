const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
  var a=data.split(" ")
  var b=a[0]**a[1]
console.log(b)
});
