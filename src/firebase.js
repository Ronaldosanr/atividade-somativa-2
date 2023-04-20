import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1nS81sM6C9TUDUPDsdIKvK5_aJK0FCsU",
    authDomain: "projetoead-24020.firebaseapp.com",
    projectId: "projetoead-24020",
    storageBucket: "projetoead-24020.appspot.com",
    messagingSenderId: "182192304697",
    appId: "1:182192304697:web:3c7a4714aa5f18915713e8"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;