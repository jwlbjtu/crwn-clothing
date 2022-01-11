import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc, collection, setDoc, writeBatch, QuerySnapshot, DocumentSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, User } from 'firebase/auth';
import { Collections, Collection } from 'shop-component-types';

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
  userAuth: User,
  additionalData: { [key: string]: string }
) => {
  const userRef = doc(firestore, 'users', userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      const usersRef = collection(firestore, 'users');
      await setDoc(doc(usersRef, userAuth.uid), {
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
  const batch = writeBatch(firestore);
  collectionObj.forEach(obj => {
    const newDocRef = doc(firestore, collectionKey);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const converCollectionsSnapshotToMap = (collecitons: QuerySnapshot) => {
  const transformedCollection = collecitons.docs.map<Collection>((doc: any) => {
    const { title, items } = doc.data();
    
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce<Collections>((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
}

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Firebae Google Authentication Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
