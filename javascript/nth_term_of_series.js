const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  if(data==0){
    console.log("0");
  }
  else if(data>0){
    var a=data**2
    console.log(a);
    }
  else{
    console.log("Error");
  }
});  
    
