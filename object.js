// var person = { 
//     name : John,
//     age:30,
//     isMarried: true,
//     address: {
//         street:'vinay nagar',
//         flatNO: 201
//     }
// }
// // console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.address)
// console.log(person.street)

var person2 = new Object();

person2.name ='surya';
person2.age =32;
person2.isMarried =true;
person2.address ={};
person2.address.street ='indranagar';
person2['address']['flatNO'] =101;
console.log(person2)
