const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
  var a=data.split(" ")
  if(a[0]>a[1])
  {
  console.log(a[0]-a[1])
  }
  else
  {
  console.log(a[1]-a[0]) 
  }
});
