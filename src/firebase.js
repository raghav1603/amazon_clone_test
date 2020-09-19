import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDZ87mx1l-j8tfftdoUXXFY5e81mYp8n3M",
    authDomain: "clone-45648.firebaseapp.com",
    databaseURL: "https://clone-45648.firebaseio.com",
    projectId: "clone-45648",
    storageBucket: "clone-45648.appspot.com",
    messagingSenderId: "621791430996",
    appId: "1:621791430996:web:48f0aa9ce9fea17ee8e0c1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };