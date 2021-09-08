import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_jBhsphUmHnAXaMy_evk23Lv7UklJ_QI",
    authDomain: "kadeem-portfolio-api.firebaseapp.com",
    databaseURL: "https://kadeem-portfolio-api-default-rtdb.firebaseio.com",
    projectId: "kadeem-portfolio-api",
    storageBucket: "kadeem-portfolio-api.appspot.com",
    messagingSenderId: "211778853660",
    appId: "1:211778853660:web:1c7e026dcee868d7b9b8d9",
    measurementId: "G-9BDYSP65M5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;
