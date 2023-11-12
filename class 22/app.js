function clearInput() {
  var input = document.getElementById("textInput");

  input.value = "";
}

function changeInputType() {
  var input = document.getElementById("textInput");
  input.type = "password";
}

function changeVisibility(value) {
  var h1 = document.getElementById("showOrHide");
  if (value === "show") {
    h1.className += "show";
  } else {
    h1.className += "hide";
  }
  h1.style.backgroundColor = value;
}

function addText() {
  var h1abc = document.getElementsByClassName("enterSomeText");

  h1abc[0].innerHTML = "Adasd";
}
