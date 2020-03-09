const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
var a=n[1].split(" ")
    var l= []
for(i=0;i<a.length-1;i++)
{
   var s=a[i+1]
   var b=a[i]
    l.push(s)
    l.push(b)
    i=i+1
}
if((n[0]%2!=0))
{
l.push(a[a.length-1])
}
console.log(l.join(" "))
});
