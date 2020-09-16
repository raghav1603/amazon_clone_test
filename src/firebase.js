import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD7AOyBmtPT-ro1vKnrL45St96qCPzcEfs",
    authDomain: "app-c4473.firebaseapp.com",
    databaseURL: "https://app-c4473.firebaseio.com",
    projectId: "app-c4473",
    storageBucket: "app-c4473.appspot.com",
    messagingSenderId: "987723913975",
    appId: "1:987723913975:web:d91448bc28686541ef91f2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };