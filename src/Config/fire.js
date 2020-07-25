import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAIrmNMvAkeYg0w-i4FeVKrPpxUlC1LzAE",
  authDomain: "react-project-8f6b1.firebaseapp.com",
  databaseURL: "https://react-project-8f6b1.firebaseio.com",
  projectId: "react-project-8f6b1",
  storageBucket: "react-project-8f6b1.appspot.com",
  messagingSenderId: "1058142963402",
  appId: "1:1058142963402:web:161babedfe10daa0c49633",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
