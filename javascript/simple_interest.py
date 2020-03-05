const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[]
inp.on("list",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[]
  a=n.split(" ")
  var p=a[0],t=a[1],r=a[2]
  s=(p*t*r)/100;
  console.log(s.toFixed(2));
});
