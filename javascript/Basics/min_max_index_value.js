const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
  var e=n[0]
  var b=n[1]
  var a=n[1].split(" ")
  a.sort()
  var c=b.split(" ")
  for(i=0;i<=n[0];i++)
  {
    if(a[0]==c[i])
    {
        var min=i
    }
    else if(a[e-1]==c[i])
    {
        var max=i
    }
  }
  console.log(min+1,max+1)
});
