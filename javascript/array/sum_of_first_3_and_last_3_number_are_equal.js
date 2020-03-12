const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0];
    var b=n[1].split(' ');
    for(i=0;i<b.length;i++)
    {
       var c=(parseInt(b[i]))+(parseInt(b[i+1]))+(parseInt(b[i+2]))
       break;
    }
    //console.log(c);
    for(j=(b.length-1);j>0;j--)
    {
       var d=(parseInt(b[j]))+(parseInt(b[j-1]))+(parseInt(b[j-2]))
       break;
    }
    //console.log(d);
    if(c==d)
    {
        console.log("1")
    }
    else{
        console.log("0")
    }
});
