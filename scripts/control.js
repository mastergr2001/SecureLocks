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

var state;

firebase
  .database()
  .ref()
  .on("value", function (snapshot) {
    state == snapshot.val().status;
  });

document.getElementById("stateForm").addEventListener("submit", unlock);

function unlock(event) {
  event.preventDefault();
  if (document.getElementById("unlock").innerHTML == "UNLOCK") {
    document.getElementById("unlock").innerHTML = "LOCK";
    firebase.database().ref().update({
      status: "UNLOCKED",
    });
  } else {
    document.getElementById("unlock").innerHTML = "UNLOCK";
    firebase.database().ref().update({
      status: "LOCKED",
    });
  }
}

// change bg color of button on click
$("button").on("click", function () {
  $("button").css("background-color", "#8dcbf1");
  // give delay while changing button color to give "click" effect
  setTimeout(function () {
    $("button").css("background-color", "#bbdcf1");
  }, 50);
});
