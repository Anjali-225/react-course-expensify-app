import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6hV9uOjBfGb9u8D15SBDt0C6D3OzoJOo",
    authDomain: "expensify-66f81.firebaseapp.com",
    databaseURL: "https://expensify-66f81.firebaseio.com",
    projectId: "expensify-66f81",
    storageBucket: "expensify-66f81.appspot.com",
    messagingSenderId: "689678713970",
    // appId: "1:689678713970:web:a2985c1fa41b1198fc2eeb",
    // measurementId: "G-2W3PJJBRET"
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

// database.ref().set("This is my data.");

// database.ref('age').set(18);
// database.ref('location/city').set('Rivonia');

// attributes, height, weight
database.ref('attributes').set({
    height: 150,
    weight: 60
}).then(() => {
    console.log('Second set call worked');
}).catch((e) => {
    console.log('Things didnt work for the second error', e);
});

// console.log('I made a request to change the data');