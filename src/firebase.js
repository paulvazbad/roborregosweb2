import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAauvPBPyAJ9w7bjWbdoaUArJlrgVW6AGA",
    authDomain: "roborregosweb2.firebaseapp.com",
    databaseURL: "https://roborregosweb2.firebaseio.com",
    projectId: "roborregosweb2",
    storageBucket: "",
    messagingSenderId: "1082684909632"
  };
  firebase.initializeApp(config);
  export default firebase;