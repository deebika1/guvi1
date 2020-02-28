#Remove whitespace and find length of string
const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
 data = data.replace(/\s+/g, "");
 console.log(data.length);
});
