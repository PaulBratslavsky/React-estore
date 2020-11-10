import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAeTtFLwkYkvStoum2QHcllB-ev4OLR7lg",
    authDomain: "fir-api-cbfb4.firebaseapp.com",
    databaseURL: "https://fir-api-cbfb4.firebaseio.com",
    projectId: "fir-api-cbfb4",
    storageBucket: "fir-api-cbfb4.appspot.com",
    messagingSenderId: "480667406531",
    appId: "1:480667406531:web:7fe653776068f7e26bd276",
    measurementId: "G-R86D1JLZ1V"
  };

  export function convertCollectionSnapshot(data) {
    let transformedData = [];

    data.forEach(item => {
      const { title, items } = item.data()

      const newObject = {
        routeName: encodeURI(title.toLowerCase()),
        id: item.id,
        title,
        items,
      }
  
      transformedData.push(newObject) 

    })

    const result = transformedData.reduce((acc, item) => {
      acc[item.title.toLowerCase()] = item
      return acc
    },{})
    
    return result;
  }
  
  export async function createUserProfileDocument(userAuth, additionalData) {
    if (!userAuth) return

    const userRef = database.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdOn = new Date()

      const userObject = {
        displayName,
        email,
        createdOn,
        ...additionalData
      }
 
      try {
        await userRef.set(userObject)
      } catch (err) {
        console.error(`ERROR CREATING USER PROFILE: ${err}`)
      }
    }
    
    return userRef;
  }

  export const addCollection = async (collectionKey, items) => {
    const collectionRef = database.collection(collectionKey)

    const batch = database.batch()

    items.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })

    return await batch.commit()
  }

  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.analytics();

  export const auth = firebase.auth()
  export const database = firebase.firestore()

  // google auth with gmail
  const provider = new firebase.auth.GoogleAuthProvider()

  // set params
  provider.setCustomParameters({ prompt: 'select_account'})

  // export google sign in
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  // in case want whole library
  export default firebase