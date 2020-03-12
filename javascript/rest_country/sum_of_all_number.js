// To sum the all no's in array using reduce

var sum=[1,2,3,4,5,6,7,8,9,10]
var sum =sum.reduce(function(accumulator,currentvalue,index){
    return accumulator+currentvalue;
});
console.log(sum)
