import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyBs8CBl8cLdYAy5YC45SmBzDw-X5FpdIjQ",
    authDomain: "class-attendance-app-7ea9b.firebaseapp.com",
    databaseURL: "https://class-attendance-app-7ea9b-default-rtdb.firebaseio.com",
    projectId: "class-attendance-app-7ea9b",
    storageBucket: "class-attendance-app-7ea9b.appspot.com",
    messagingSenderId: "408397076247",
    appId: "1:408397076247:web:44ce6e54d6194d9d020952"
  };
 
  // Initialize Firebase
  if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);

}


  export default firebase.database()

  