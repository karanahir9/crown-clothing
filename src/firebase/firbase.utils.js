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
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });

    }catch(error){
      console.log("error creating user", error.message);
    }
  }

  return userRef;
} 


firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
     batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections =>  {
  const transformedCollection = collections.docs.map( doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce( (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;