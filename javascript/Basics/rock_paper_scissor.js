const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
   var c=data.split(" ")
   if(c[0]=="R" && c[1]=="P" || (c[0]=="S" && c[1]=="R")|| (c[0]=="P" && c[1]=="S"))
   {
    console.log(c[1])
   }
  else if(c[0]=="R" && c[1]=="S" ||(c[0]=="P" && c[1]=="R")||(c[0]=="S" && c[1]=="P"))
   {
    console.log(c[0])
   }
else if(c[0]==c[1])
  {
    console.log("D")
  }
    });
