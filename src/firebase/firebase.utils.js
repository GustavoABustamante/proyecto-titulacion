import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCn-HSk8ZVm2IdqkhMSVlsYDIaAT4nve4",
    authDomain: "proyecto-titulacion-ee4e5.firebaseapp.com",
    databaseURL: "https://proyecto-titulacion-ee4e5.firebaseio.com",
    projectId: "proyecto-titulacion-ee4e5",
    storageBucket: "proyecto-titulacion-ee4e5.appspot.com",
    messagingSenderId: "624972110312",
    appId: "1:624972110312:web:76af3c21cd8f84f5e8ec5d",
    measurementId: "G-7DJB4ZJV1P"
  };

  export const createUserProfileDocument = async (userAuth, infoAdicional) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...infoAdicional
        })
      } catch (error) {
        console.log('Error! Usuario no creado.', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const IniciarSesionConGoogle = () => auth.signInWithPopup(provider);

  export default firebase;