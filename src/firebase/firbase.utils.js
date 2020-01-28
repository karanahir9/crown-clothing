import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAYOe-5ydPAGe0wZdATNF7p-EnXDx-qrpI",
    authDomain: "crown-db-7ba12.firebaseapp.com",
    databaseURL: "https://crown-db-7ba12.firebaseio.com",
    projectId: "crown-db-7ba12",
    storageBucket: "crown-db-7ba12.appspot.com",
    messagingSenderId: "390096667702",
    appId: "1:390096667702:web:b50d240c54fd219b054497",
    measurementId: "G-WZTPP8N4LZ"
  };
  
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;