const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0],b=n[1];
    var count=0;
   var c=b.split(' ');
   console.log(c[0]|c[1])
});
