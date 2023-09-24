// //! Chapter # 23 to
// var myName = "ameen";

// var result = myName.slice(0, 1);
// var remainingChar = myName.slice(1);

// console.log(result + remainingChar);

// var monthName = prompt("Enter Month");

// if (monthName.length > 3) {
//   monthName = monthName.slice(0, 3);
// }

// document.write(monthName);

// var country = "Pakistan Sa Zinda Bhag";
// var result = country.lastIndexOf("a");
// console.log(result);

// var fruitName = "Banana";
// var result = fruitName.slice(2, 3);
// document.write(result);

// var fruitName = "Banana";

// var result = fruitName.charAt(fruitName.length - 1);
// console.log(result);

// var userName = prompt("Enter USer name");

// for (var i = 0; i < userName.length; i++) {
//   if (userName.charAt(i) === "@") {
//     alert("Wrong User name");
//   }
// }
// var text = "The world war 2 is happend on 09 May 2023";

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 11) === "world war 2") {
//     text = text.slice(0, i) + "three world war" + text.slice(i + 11);
//   }
// }
// console.log(text);

// var text = "The world war 2 is happend on 09 May 2023";
// var firstChar = text.indexOf("world war 2");
// if (firstChar !== -1) {
//   text =
//     text.slice(0, firstChar) + "Second World War" + text.slice(firstChar + 11);
// }

// console.log(text);

// var text = "The world war 2 is happend on 09 May 2023";

// var result = text.replace("o", "ABCD");
// var result = text.replaceAll("o", "abcd");

// console.log(result);

var number = 10.54;

var result = Math.round(number);

document.write(result);
