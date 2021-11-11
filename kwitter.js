// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvgrQ8nJQEPyn3K859cTgXRtzJ8AkPv3Q",
  authDomain: "kwitter-app-9791b.firebaseapp.com",
  projectId: "kwitter-app-9791b",
  storageBucket: "kwitter-app-9791b.appspot.com",
  messagingSenderId: "723820365548",
  appId: "1:723820365548:web:1daedefe6e28c5e538c7c9",
  measurementId: "G-DJ68XY4JCV"
};
function adduser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose : "adding user"
window.location = "kwitter_room.html"
    })