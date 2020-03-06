const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0],b=n[1];
    console.log(a);
    c=b.split(' '); 
    console.log(c[0],c[1]);
    if(a>c[0]&&a<c[1])
    {
        
        console.log("yes")
    }
    else{
        console.log("no")
    }
});
