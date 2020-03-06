const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
    a=data.split(' ')
    if((a[0]**2)+(a[1]**2)==(a[2]**2)){
        console.log("yes")
    }
    else{
        console.log("no")
    }
});
