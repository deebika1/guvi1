const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
   var c=n[1].split(' ');
    var d=c.sort();
    console.log(d[0]);
});
