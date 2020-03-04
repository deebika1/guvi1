#convert a string position uppercase or lowercase
const readline=require('readline')
const inp=readline.createInterface({input:process.stdin});
const  n=[];
inp.on("line",(data)=>{
    n.push(data);
    });
inp.on("close",()=>{
    var a=n[0];
    var b=n[1];
    var c=n[2];
    s=a.split('');
    var i=c-1;
    while(i<s.length){
    if(b==1)
    {
     s[i]=s[i].toUpperCase() ;
     }
    else{
    s[i]=s[i].toLowerCase();
   
    }
    i=i+parseInt(c);
    }
    var  m='';
    for(var i=0;i<s.length;i++)
    {
    m+=s[i]
    }
    console.log(m);
   
});


Displaying sum of 3 prime.txt.
