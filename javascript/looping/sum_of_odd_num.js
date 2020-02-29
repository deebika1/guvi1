#program to find sum of all odd number
n=prompt()
var a=0
for(i=1;i<=n;i++)
{
 if(i%2!=0){
	a+=i
 }
}
console.log(a)
