import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAuE4GPkyg1cmTXu1E4x9rdX204Ev8snpc",
    authDomain: "test5-17ff6.firebaseapp.com",
    databaseURL: "https://test5-17ff6.firebaseio.com",
    projectId: "test5-17ff6",
    storageBucket: "test5-17ff6.appspot.com",
    messagingSenderId: "310445831591",
    appId: "1:310445831591:web:4f8690cec83c5aaac4b282",
    measurementId: "G-0BKNQ02YJV"
  };

firebase.initializeApp(config);
const firestore = new firebase.firestore()

export { firestore }