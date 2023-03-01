import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAI58N7qwxaK8uLYr_gFP1mPJPboIXpUCM",
    authDomain: "gossip-ff156.firebaseapp.com",
    projectId: "gossip-ff156",
    storageBucket: "gossip-ff156.appspot.com",
    messagingSenderId: "463225750211",
    appId: "1:463225750211:web:0da5a0d3c61b39957cd876"
});

var db = firebaseApp.firestore();

export { db };