import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd_YuLqPY0-SFEgvl07Nw4BmTZw9H0csY",
  authDomain: "organizen-81cdc.firebaseapp.com",
  databaseURL: "https://organizen-81cdc-default-rtdb.firebaseio.com",
  projectId: "organizen-81cdc",
  storageBucket: "organizen-81cdc.appspot.com",
  messagingSenderId: "197746246481",
  appId: "1:197746246481:web:805a11f143cde7cb384970"
};

// Initialize Firebase
let app;

if (firebase?.apps.length==0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };