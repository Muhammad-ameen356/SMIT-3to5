// for (var a = 0; a <= 10; a++) {
//   console.log(a);
// }

//* Pre Increment
// ++a
// --a

//* Post Increment
// a++
// a--

var a = 1;
// a++

// a = a+1
// var result = ++a + a++ + ++a;
// 11 + 11 + 13

// console.log(a++ + a++ + ++a + ++a + a++);
// 10   + 11  +  13 + 14  + 14

// console.log(--a + --a + ++a);
// 9   +  8  + 9

// var result = ++a + --a + a++ + a-- - --a;
// // 2 + 1   + 1   + 2   - 0
// console.log(result);

// for (var i = 1; i <= 10; i++) {
//   //   console.log(i);
//   for (var j = 1; j <= 10; j++) {
//     // debugger;
//     console.log(j * i);
//   }
// }

// var arr = [
//   [1, 2, 3, 4, 5, 6, 7, 8],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// [1, 2, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
//   var innerArr = arr[i]; // [1,2,3]

//   for (var j = 0; j < innerArr.length; j++) {
//     console.log(innerArr[j]);
//   }
// }

// var str = "Muhammad ameen";

// // console.log(str.toLowerCase());
// console.log(str.toUpperCase());

var name = "Muhammad Ameen";

var result = name.slice(5);
console.log(result);
