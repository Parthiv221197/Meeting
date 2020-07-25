//from: Parthiv Patel
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDYm6EJ8Y9h3O5AtR8r40JwnPwcq-VanmE",
    authDomain: "meeting-website-361a8.firebaseapp.com",
    databaseURL: "https://meeting-website-361a8.firebaseio.com",
    projectId: "meeting-website-361a8",
    storageBucket: "meeting-website-361a8.appspot.com",
    messagingSenderId: "1030781685324",
    appId: "1:1030781685324:web:c4a39a3d788421252f2ee9",
    measurementId: "G-YMN3JMVPLV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;