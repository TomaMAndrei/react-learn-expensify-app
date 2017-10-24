// 
// Object destructuring
//
// const person = {
//   name : "andrei",
//   age: 16,
//   location:{
//     city:'tunari',
//     temp:'23'
//   }
// };

// const { name: firstName = 'Anonymus', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(city && temperature){
//   console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher:{
//     name: "Penguin"
//   }
// }

// const { name:publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Publisher



//
// Array destructuring
//

// const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pensylvenia', '19147'];

// const [, city, state = "New york"] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffe (ice)','$2.00','$2.40','$3.00'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)