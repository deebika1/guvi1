const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
var a=n[1].split(" ")
var b=n[2].split(" ")
var c=[]
for(i=0;i<=a.length-1;i++)
{
    for(j=0;j<=b.length-1;j++)
    {
        if(a[i]==b[j])
        {
            c.push(a[i])
        }
    }
}
if(c.length==0)
{
    console.log("-1")
}
else
{
var res=[...new Set(c)]
console.log(res.join(" "))
}
});
