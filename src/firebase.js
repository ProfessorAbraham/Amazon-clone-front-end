// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB1hNsSQxlArlznP29DAhwvjW0bX9KYT-k",
    authDomain: "clone-fb360.firebaseapp.com",
    projectId: "clone-fb360",
    storageBucket: "clone-fb360.appspot.com",
    messagingSenderId: "796152612095",
    appId: "1:796152612095:web:d9f0b69f902d64286a78ca",
    measurementId: "G-WTZ4FKC0VV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
