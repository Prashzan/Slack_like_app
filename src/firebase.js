import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyAoI0VfwkUcketowg2LC-yjUbKBhaOoU6c",
    authDomain: "slack-app-f6349.firebaseapp.com",
    databaseURL: "https://slack-app-f6349.firebaseio.com",
    projectId: "slack-app-f6349",
    storageBucket: "slack-app-f6349.appspot.com",
    messagingSenderId: "118726654792",
    appId: "1:118726654792:web:8b5a613eb0e66f70c1d17d",
    measurementId: "G-ZW2Z0XTEXC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default firebase; 