function clear12() {
  var tagName = document.getElementsByTagName("h2");
  //   var className = document.getElementsByClassName("abc");

  //   tagName[0].className = "xyz";
  //   console.log(className);

  for (let i = 0; i < tagName.length; i++) {
    tagName[i].className = "changeIntoOrange";
  }
}

function changetext() {
  let parent = document.getElementById("parent").nodeType;
  let nodeType = document.getElementById("node").nodeType;
  let nodeValue = document.getElementById("node").nodeValue;

  let childNode = document.getElementById("parent").childNodes[1].nodeType;

  //   let p = (parent.getElementsByTagName("h3")[0].innerHTML = "DEF");

  //   console.log(parent);
  //   console.log(nodeType);
  //   console.log(nodeValue);
  console.log(childNode);
}

function checkAttribute() {
  let node = document.getElementById("node");
  let result = node.hasAttribute("class");
  let getResult = node.getAttribute("class");
  let setResult = node.setAttribute("onclick", "click()");
  console.log(result);
  console.log(getResult);
}
