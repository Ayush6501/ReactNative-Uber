import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBEqpJj_xW_V-LSbSRhziPn5S0WLFC-9-0",
    authDomain: "native-uber.firebaseapp.com",
    projectId: "native-uber",
    storageBucket: "native-uber.appspot.com",
    messagingSenderId: "578763126918",
    appId: "1:578763126918:web:8bc0bb39f2d6a4751f7907",
    measurementId: "G-ZY1BZ71BQL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth, storage};
export default db;
