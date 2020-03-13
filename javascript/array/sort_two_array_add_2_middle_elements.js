const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0],d;
var b=n[1];
var c=n[2];
var d=b+' '+c;
var s=d.split(" ")
s.sort(function(a,b){
  return a-b 
});
var l=(s.length)/2
var ad=parseInt(s[l-1])+parseInt(s[l])
console.log(ad)
});
