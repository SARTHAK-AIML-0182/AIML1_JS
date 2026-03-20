var person=(
    name:"Jeet" , age:50 , city:"ghaziabad"
);
for(var key in person){
    console.log(key,person[key]);
}
function add(a,b){
    return a+b;
}

var numbers={1,2,3,4};
var result = numbers.map(n=>n*2);
console.log(result);

var numbers =[10,20,30,40];
var result = numbers.filter(n=>n*20);
console.log(result);

var numbers =[10,20,30];
var result = numbers.reduce(n=>n*20);
console.log(result);
