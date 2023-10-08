// //! Chapter # 34 to

var date = new Date();

// date.setFullYear(1999);
date.setDate(12);
// date.setMonth(2);
// date.setMinutes(12);
// date.setHours(2);
// date.setSeconds(12);
// date.setMilliseconds(2000);
// date.setHours(2);

// console.log(date);
// console.log(date.getTime());

// //* Function

// function sum() {
//   var a = 12;
//   var b = 12;
//   var result = a + b;
//   console.log(result);
// }
// sum();

// function sum(a, b) {
//   var result = a + b;
//   console.log(result);
// }

// sum(10, 10);
// sum(1, 2);

function sum(a, b) {
  return a + b;
}
// console.log(sum(4, 5));
// console.log(sum(2, 4));
// console.log(sum(1, 2));

function multiply() {
  var result = 2 * sum(10, 10);
  console.log(result);
}
multiply();

// console.log(result);
