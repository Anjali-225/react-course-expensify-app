import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // subscribe to the child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // subscribe to the child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // subscribe to the child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//       });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Rent for Oct 2020',
//   amount: 109500,
//   createdAt: 1231564565213
// });

// database.ref('notes/-MJ1soOGvmbuJgMH3gwT').remove();

// database.ref('notes').push({
//   title: 'Course Projects',
//   body: 'React Native. Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     aposujfd: {
//       title: 'First Note!', 
//       body: 'This is my note'
//     },
//     dfjhdsjnd: {
//       title: 'Another Note!', 
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First Note!', 
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another Note!', 
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

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