var firebaseConfig = {
  apiKey: "AIzaSyBb6TPQdPILoQujZfRGSjzG48TQZy8pQfI",
  authDomain: "door-16c1f.firebaseapp.com",
  projectId: "door-16c1f",
  storageBucket: "door-16c1f.appspot.com",
  messagingSenderId: "992560373407",
  appId: "1:992560373407:web:c4cbdea0b713bda2220caa",
  measurementId: "G-2Y1KQTB8N9",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var userid, password;

document.getElementById("adminForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  var userid = document.getElementById("updateusr").value;
  var password = document.getElementById("updatepwd").value;
  firebase.database().ref().update({
    userid: userid,
    password: password,
  });
  alert("username and password updated! Pls logout.");
}

// change bg color of button on click
$("button").on("click", function () {
  $("button").css("background-color", "#8dcbf1");
  // give delay while changing button color to give "click" effect
  setTimeout(function () {
    $("button").css("background-color", "#bbdcf1");
  }, 50);
});
