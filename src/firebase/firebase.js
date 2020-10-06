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

database.ref().set({
    name: 'Anjali', 
    age: 19,
    isSingle: true,
    location: {
        city: 'Woodmead',
        country: 'South Africa'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed', e);
});

// database.ref('isSingle').set(null);

database.ref('isSingle').remove()
  .then(() => {
      console.log("Remove succeeded.");
  }).catch((e) => {
      console.log("Remove Falied: " + e);
  });