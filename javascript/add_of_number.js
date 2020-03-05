#addition of two number
const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[]
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],b=n[1];
  ad=parseInt(a)+parseInt(b)
  console.log(ad)
});
