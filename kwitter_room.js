// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvgrQ8nJQEPyn3K859cTgXRtzJ8AkPv3Q",
  authDomain: "kwitter-app-9791b.firebaseapp.com",
  projectId: "kwitter-app-9791b",
  storageBucket: "kwitter-app-9791b.appspot.com",
  messagingSenderId: "723820365548",
  appId: "1:723820365548:web:1daedefe6e28c5e538c7c9",
  measurementId: "G-DJ68XY4JCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
function adduser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    
    window.location = "kwitter_room.html";
    window.open('https://www.wafflehouse.com', '_blank');
}
function addroom
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
})
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})}
{
    Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onlick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
                           
    //End Code
});});}
getData();
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorgae.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}
