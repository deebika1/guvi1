const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
   var c=data.split(" ")
   if(c[0]!=c[1] && c[1]!=c[2] && c[2]!=c[0])
   {
       console.log("yes")
   }
  else{
    console.log("no")
  }
    });
