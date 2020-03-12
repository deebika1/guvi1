const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var p=n[0];
    var a=n[1].split(' ');
var d=[]
for(i=(p-1);i>0;i--)
{
   var b=(parseInt(a[i-2])+parseInt(a[i-1])+parseInt(a[i]))
   break
}
for (j=0;j<=p-1;j++)
{
var c=a[j]-b;
d.push(c);
}
console.log(d.join(" "))
});
