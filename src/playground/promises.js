const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve('This is my resolve data');
  }, 1500);
  
});
console.log("after");

promise.then((data) => {
  console.log('1',data);
});
promise.then('2',(data) => {
  console.log(data);
});
console.log("before");





///////////////////////////////////////// FIREBASE
// database.ref('notes').push({
//   title: "Course Topics",
//   body: "React Native"
// });

// const firebaseNotes = {
//   notes :{
//     kldfjgdf:{
//       id: '12',
//       title: 'First Note',
//       body: 'This is my note'
//     }
//   }
// }

// const notes = [{
//   id:'12',
//   title: 'First Note',
//   body:'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }]

// database.ref('notes').set(notes);
// database.ref('notes')
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   const text = data.name + " is a " + data.job.title + " at " + data.job.company;
//   console.log(text);
// });

// setTimeout(() => {
//   database.ref().update({
//     name : "Andrei Toma",
//     'job/title': "Web Developer",
//     'job/company': "Romexpo"
//   });
//  }, 3000);
// const onValueChange = database.ref().on('value', (spanshot) =>{
//   console.log(spanshot.val());
// }, (e) =>{
//   console.log('Error with data fetching', e);
// } );

// setTimeout(() => {
//   database.ref('age').set(29);
// },3500);
// setTimeout(() => {
//   database.ref().off(onValueChange);
// },7000);
// setTimeout(() => {
//   database.ref('age').set(28);
// },10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database.ref().set({
//   name: "Toma Andrei",
//   age: 24,
//   job:{
//     title: "software developer",
//     company: 'google'
//   },
//   stressLevel:6,
//   location:{
//     city: "tunari",
//     country: "romania"
//   }
// }).then(() => {
//   console.log('Data is saved 1');
// }).catch((e) =>{
//   console.log('Thuis failed.', e)
// });


// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log("We remove is single");
// //   })
// //   .catch((e)=>{
// //     console.log('This isn`t work', e);
// //   });

// //database.ref('isSingle').set(null);

// /* database.ref().update({
//   name:"Kiem",
//   age:29,
//   job:"Software developer",
//   isSingle:null
// }); */

// database.ref().update({
//   stressLevel: 9,
//   'job/company': "Amazon",
//   'location/city': "Seattle"
// });