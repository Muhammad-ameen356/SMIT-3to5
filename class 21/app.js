function callAlert() {
  alert("Hello world");
}

function getValue() {
  const input = document.getElementById("testInput");

  console.log(input.value);
  input.value = "Ameen";
}

// function formValue(id) {
//   console.log(e);
//   //   e.preventDefault();
//   var genaricDocument = document.getElementById(id);

//   console.log(genaricDocument.value);
// }

function changeParagraph() {
  var text = document.getElementById("paragraph");

  const previousValue = text.innerHTML;

  `${previousValue}asdsadsadasdasddasdasdas`

  text.innerHTML = `${previousValue}  corrupti culpa ipsam, fugiat voluptatem aspernatur hic placeat
    quos ad, doloribus aut recusandae eos deserunt, necessitatibus officia sit
    velit!`;
  console.log(previousValue);
}
