#number of days in month
const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  if(data==1 || data==3 || data==5 || data==7 || data==8 || data==10 || data==12)
  {
    console.log("31")
  }
  else if(data==4 || data==6 || data==9 || data==11)
  {
    console.log("30")
  }
  else if(data==2)
  {
    console.log("28")
  }
  else{
    console.log("error")
  }
});
