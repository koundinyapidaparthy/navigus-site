import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCeJZcFyBU67DHjWAJZunEnhPX20zCwFA0",
    authDomain: "navigus-4a4cd.firebaseapp.com",
    projectId: "navigus-4a4cd",
    storageBucket: "navigus-4a4cd.appspot.com",
    messagingSenderId: "275953748688",
    appId: "1:275953748688:web:3f24df78230a0739d22cd5"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default firebaseApp;
  