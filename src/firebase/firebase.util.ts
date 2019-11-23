import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB8afWUCFj6qh6Rtb7W23xJBv9mR7LxjXw',
  authDomain: 'crwn-db-5fd04.firebaseapp.com',
  databaseURL: 'https://crwn-db-5fd04.firebaseio.com',
  projectId: 'crwn-db-5fd04',
  storageBucket: 'crwn-db-5fd04.appspot.com',
  messagingSenderId: '788166074936',
  appId: '1:788166074936:web:74ffdba3504867c406bccd',
  measurementId: 'G-BN41D8HSCG'
};

export const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData: { [key: string]: string }
) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (e) {
      console.log('error creating user', e);
    }
  }

  return userRef;
};

export const addCollectionsToFirebase = async (collectionKey: string, collectionObj: Array<any>) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  collectionObj.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit()
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Firebae Google Authentication Provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
