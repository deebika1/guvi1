const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
  var a=data.split(" ")
  var tot=0;
  for(i=1;i<=a;i++)
  {
   tot+=i;  
  }
  console.log(tot)
});
