import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6hV9uOjBfGb9u8D15SBDt0C6D3OzoJOo",
    authDomain: "expensify-66f81.firebaseapp.com",
    databaseURL: "https://expensify-66f81.firebaseio.com",
    projectId: "expensify-66f81",
    storageBucket: "expensify-66f81.appspot.com",
    messagingSenderId: "689678713970",
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(20);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(21);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref().set({
//     name: 'Anjali', 
//     age: 19,
//     // isSingle: true,
//     stressLevel: 8,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Woodmead',
//         country: 'South Africa'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()
//   .then(() => {
//       console.log("Remove succeeded.");
//   }).catch((e) => {
//       console.log("Remove Falied: " + e);
//   });