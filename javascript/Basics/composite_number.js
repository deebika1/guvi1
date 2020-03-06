const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
    var c=0;
    for(i=2;i<data;i++)
    {
        if((data%i)==0)
        {
            c=i;
        }
    }
    if(c>0){
        console.log("yes")
    }
    else{
        console.log("no")
    }
});
