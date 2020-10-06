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

  firebase.database().ref().set({
      name: 'Anjali'
  });