const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
  var a=data.split(" ")
  var b=a[0]+a[1]
  if(b%2==0)
  {
  console.log("even")
  }
  else
  {
   console.log("odd")   
  }
});
