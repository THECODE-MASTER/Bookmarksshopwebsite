import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAEIyxUmvX1ERl2H9_AT453iL5qXDXEWT4",
    authDomain: "bookmarkswebsite.firebaseapp.com",
    projectId: "bookmarkswebsite",
    storageBucket: "bookmarkswebsite.appspot.com",
    messagingSenderId: "535456897724",
    appId: "1:535456897724:web:1a579a6cc8869b37c80eb9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();