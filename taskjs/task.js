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

// function findLongestWord(string = "") {
//   // Write code under this line
//   const strings = string.split(" ");
//   let longestWord = "";
//   let elementLength = 0;
//   for (const element of strings) {
//     console.log(element);
//     if (element.length > elementLength) {
//       elementLength = element.length;
//       longestWord = element;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // 'jumped'

// console.log(findLongestWord("Google do a roll"));
// // // 'Google'

// console.log(findLongestWord("May the force be with you"));
// // 'force'

// task 4

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let str = string.split("");
//   if (str.length > maxLength) {
//     str.length = maxLength;
//     str.push("...");
//   }
//   let newStr = str.join("");
//   return newStr;
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// 'Vestibulum facilisis, purus ne...'

// task 5

// function checkForSpam(str) {
//   // Write code under this line
//   const strings = str.toLowerCase();

//   let message = strings.includes("spam") || strings.includes("sale");
//   return message;
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// task 6

// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     array[i] *= 10;
//   }
//   return array;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// task 7

// function filterArray(array) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }

//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, "100"]));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]
//  Number.isFinite

// task 8
// function reduceArray(array) {
//   let total = 0;
//   // Write code under this line
//   for (const element of array) {
//     if (array.length > 0) {
//       total += element;
//     }
//   }
//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// task 9

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line

//   const loginLength = login.length;

//   return loginLength >= min && loginLength <= max;
// }

// function isLoginUnique(allLogins, login) {
//   // Write code under this line
//   return (!allLogins.includes(login));
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login);
//       message = SUCCESS;
//     } else {
//       message = REFUSAL;
//     }
//   } else {
//     message = ERROR;
//   }
//   return message;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, "Ajax"));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
// 132123132
// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       }
//       return "No such property";
//     }
//   }
//   return "No such contact";
//   // Only change code above this line
// }

// console.log(lookUpProfile("Kristian", "face"));
