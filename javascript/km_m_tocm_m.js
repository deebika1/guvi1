#km to m conversion and cm to m conversion
const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  console.log(data*1000)
  console.log(data*100000)
  });
