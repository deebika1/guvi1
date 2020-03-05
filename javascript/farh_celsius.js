const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var farh=(data*1.8)+32
  console.log(farh.toFixed(2));
});
