import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyBr4xK7vcu-DwHaD3kW-9KCSPX4B86Mlzw",
    authDomain: "guess-the-word-328c4.firebaseapp.com",
    projectId: "guess-the-word-328c4",
    storageBucket: "guess-the-word-328c4.appspot.com",
    messagingSenderId: "837894492317",
    appId: "1:837894492317:web:a5fcafe0f2db81788b4474",
    measurementId: "G-P64KN8S7PX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase
