#convert country name to capital letter using map function

const upcase=dummy.map((item)=>{
    return (item.upcase).toUpperCase()})
console.log(upcase)

#filter the datas of country with capital with 5 or less letters

const captlplen=dummy.filter((item)=>{
    return (item.capital).length<=5})
console.log(captlplen)

#find the data of a country by using find method

const finditem=dummy.find((item)=>{
    return item.name---'India'})
console.log(finditem)

#sum of all nos. in array using reduce method

var a=[1,2,3,4,5,6,7,8,9,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
    return accumulator+currenvalue;
});
console.log(sum)
