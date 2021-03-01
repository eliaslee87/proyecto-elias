import firebase from 'firebase'
import "@firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = firebase.initializeApp({
    apiKey: "AIzaSyC9aEIE5PA7fosHKSEOC9pXl605OB2bgyI",
    authDomain: "proyecto-elias.firebaseapp.com",
    projectId: "proyecto-elias",
    storageBucket: "proyecto-elias.appspot.com",
    messagingSenderId: "677910486415",
    appId: "1:677910486415:web:5390e491e68f602c61bffa",
    measurementId: "G-2M5951ZK3Q"
})

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}