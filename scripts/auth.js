var authKey = "mastergr";

//Listen for form submission
document.getElementById("adminForm").addEventListener("submit", submitForm);

function submitForm(event) {
  location.reload();
  event.preventDefault();
  var securityKey = getInputVal("sKey");
  if (securityKey == authKey) {
    window.location.href = "update.html";
  } else {
    alert("Wrong Security Key! Enter Again.");
  }
}
function getInputVal(id) {
  return document.getElementById(id).value;
}

// change bg color of button on click
$("button").on("click", function () {
  $("button").css("background-color", "#8dcbf1");
  // give delay while changing button color to give "click" effect
  setTimeout(function () {
    $("button").css("background-color", "#bbdcf1");
  }, 50);
});
