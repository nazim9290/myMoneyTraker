import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDY-lwM8Lk7a5pmRDVAXOJOk4poAG7Pnts",
  authDomain: "mymoney-fc453.firebaseapp.com",
  projectId: "mymoney-fc453",
  storageBucket: "mymoney-fc453.appspot.com",
  messagingSenderId: "465754479756",
  appId: "1:465754479756:web:e289da68133d3917d76fa9",
};

//ini firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
export { projectFirestore, projectAuth };
