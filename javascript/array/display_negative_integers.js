const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var p=n[0];
    var a=n[1].split(' ');
    var b=n[2];
    var d=[];
    for(i=0;i<=p;i++)
    {
     if(a[i]<0)
     {
         
         d.push(a[i])
     }
    }
if(d.length==0)
{
    console.log("0")
}
else{
    console.log(d[0],d.join(" "))
}
});
