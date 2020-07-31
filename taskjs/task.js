// task 1

// const getItemsString = function (array) {
//   // Write code under this line
//   let result = "";
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// /*
// '1 - Mango
// 2 - Poly
// 3 - Ajax
// 4 - Lux
// 5 - Jay
// 6 - Kong
//  console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

// task 2

// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   // Write code in this line
//   (pricePerWord = message.split(" ").length * pricePerWord);
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// console.log(calculateEngravingPrice("Uno", 100)); // 100

// task 3

function findLongestWord(string = "") {
  // Write code under this line
  const strings = string.split(" ");
  let longestWord = "";
  let elementLength = 0;
  for (const element of strings) {
    console.log(element);
    if (element.length > elementLength) {
      elementLength = element.length;
      longestWord = element;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// // 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
