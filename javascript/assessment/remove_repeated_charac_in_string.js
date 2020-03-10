const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
inp.on("line", (data) => {
   let arr=[],ar=[];
   arr=data.split("");
   ar=[]
   for(i=0;i<arr.length;i++)
   {
   if(ar.indexOf(arr[i])===-1)
   {
       ar.push(arr[i])
   }
   }
   console.log(ar.join(""));
});
