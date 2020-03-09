const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
  var a=data.split(" ")
  var b=a[0]*a[1]
  var c=b**0.5
  if(c==a[0])
  {
  console.log("yes")
 }
 else
 {
  console.log("no")  
 }
});
